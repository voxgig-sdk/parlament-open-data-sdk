# ParlamentOpenData SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class ParlamentOpenDataContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = ParlamentOpenDataControl.new
    ctrl_raw = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = ParlamentOpenDataHelpers.to_map(ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = ParlamentOpenDataHelpers.to_map(ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = ParlamentOpenDataHelpers.to_map(ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = ParlamentOpenDataHelpers.to_map(ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(ParlamentOpenDataSpec) ? sp : basectx&.spec

    r = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(ParlamentOpenDataResult) ? r : basectx&.result

    rp = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(ParlamentOpenDataResponse) ? rp : basectx&.response

    opname = ParlamentOpenDataHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    return @opmap[opname] if @opmap[opname]
    return ParlamentOpenDataOperation.new({}) if opname.empty?

    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = ParlamentOpenDataOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[opname] = op
    op
  end

  def make_error(code, msg)
    ParlamentOpenDataError.new(code, msg, self)
  end
end
