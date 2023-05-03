# frozen_string_literal: true

require "bundler/inline"

gemfile(true) do
  source "https://rubygems.org"
  gem "redcarpet"
end

require "erb"
require "optparse"
require "redcarpet"

class Generator
  DEFAULT_README_PATH = File.expand_path("./src/README.md").freeze
  DEFAULT_TEMPLATE_PATH = File.expand_path("./index.html.erb").freeze
  DEFAULT_OUTPUT_PATH = File.expand_path("./dist/index.html").freeze

  attr_reader :readme_path, :template_path, :output_path

  def initialize(
    readme_path: DEFAULT_README_PATH,
    template_path: DEFAULT_TEMPLATE_PATH,
    output_path: DEFAULT_OUTPUT_PATH
  )
    @readme_path = File.expand_path(readme_path)
    @template_path = File.expand_path(template_path)
    @output_path = File.expand_path(output_path)
  end

  def generate
    body = parser.render(File.read(readme_path))
    html = template.result_with_hash(body:)
    File.write(output_path, html)
  end

  private

  def parser
    Redcarpet::Markdown.new(renderer)
  end

  def renderer
    Redcarpet::Render::HTML.new(
      filter_html: false,
      escape_html: false,
    )
  end

  def template
    ERB.new(File.read(template_path))
  end
end

opt = OptionParser.new
params = {}
opt.on("-r README_PATH") { |v| params[:readme_path] = v }
opt.on("-t TEMPLATE_PATH") { |v| params[:template_path] = v }
opt.on("-o OUTPUT_PATH") { |v| params[:output_path] = v }
opt.parse!(ARGV)

Generator.new(**params).generate
