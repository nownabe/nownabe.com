# frozen_string_literal: true

require "bundler/inline"

gemfile(true) do
  source "https://rubygems.org"
  gem "redcarpet"
end

require "erb"
require "redcarpet"

class Generator
  DEFAULT_README_PATH = File.expand_path("./src/README.md")
  DEFAULT_TEMPLATE_PATH = File.expand_path("./index.html.erb")
  DEFAULT_OUTPUT_PATH = File.expand_path("./dist/index.html")

  attr_reader :readme_path, :template_path, :output_path

  def initialize(
    readme_path: DEFAULT_README_PATH,
    template_path: DEFAULT_TEMPLATE_PATH,
    output_path: DEFAULT_OUTPUT_PATH
  )
    @readme_path = readme_path
    @template_path = template_path
    @output_path = output_path
  end

  def generate
    body = parser.render(raw_markdown)
    html = template.result_with_hash(body:)
    File.write(output_path, html)
  end

  private

  def parser
    @parser ||= Redcarpet::Markdown.new(
      renderer,
      tables: true,
      fenced_code_blocks: true,
      autolink: true,
      strikethrough: true,
      footnotes: true,
    )
  end

  def raw_markdown
    @raw_markdown ||= File.read(readme_path)
  end

  def renderer
    Redcarpet::Render::HTML.new(
      filter_html: false,
      escape_html: false,
    )
  end

  def template
    @template ||= ERB.new(File.read(template_path))
  end
end

Generator.new.generate
