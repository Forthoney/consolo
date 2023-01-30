# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'consolo'
  spec.version       = '0.1.0'
  spec.authors       = ['Forthoney']
  spec.email         = ['castlehoneyjung@gmail.com']

  spec.summary       = "A console-inspired jekyll theme for personal blogs and websites. Improved/expanded fork of b2a3e8's jekyll-theme-console."
  spec.homepage      = "TODO: Put your gem's website or public repo URL here."
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(/^(assets|_layouts|_includes|_sass|LICENSE|README)/i)
  end

  spec.add_runtime_dependency 'jekyll', '~> 3.9'

  spec.add_development_dependency 'bundler', '~> 1.16'
  spec.add_development_dependency 'rake', '~> 12.0'
end
