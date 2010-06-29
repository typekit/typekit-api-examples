## gemspec template from rakegem
## http://github.com/mojombo/rakegem/
Gem::Specification.new do |s|
  s.specification_version = 2 if s.respond_to? :specification_version=
  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.rubygems_version = '1.3.5'

  s.name              = 'kitgen'
  s.version           = '0.1.0'
  s.date              = '2010-06-28'
  s.rubyforge_project = 'kitgen'

  s.summary     = "Example command line Typekit API client"
  s.description = "Kitgen is an example Typekit API client. It can be used to generate new kits from the command line."

  s.authors  = ["Paul Hammond"]
  s.email    = 'paul@typekit.com'
  s.homepage = 'http://github.com/typekit/typekit-api-examples'

  s.require_paths = %w[lib]

  s.executables = ["kitgen"]
  s.default_executable = 'kitgen'

  s.rdoc_options = ["--charset=UTF-8"]
  s.extra_rdoc_files = %w[README LICENSE]

  #s.add_dependency('DEPNAME', [">= 1.1.0", "< 2.0.0"])
  #s.add_development_dependency('DEVDEPNAME', [">= 1.1.0", "< 2.0.0"])

  # = MANIFEST =
  s.files = %w[
    LICENSE
    README
    Rakefile
    bin/kitgen
    kitgen.gemspec
    lib/kitgen.rb
  ]
  # = MANIFEST =

  s.test_files = s.files.select { |path| path =~ /^test\/test_.*\.rb/ }
end
