ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"

Dir[Rails.root.join("test/support/**/*.rb")].sort.each { |file| require file }

if defined?(Rails::LineFiltering)
  module Rails
    module LineFiltering
      def run(*args)
        options = args[1].is_a?(Hash) ? args[1] : {}
        options[:filter] = Rails::TestUnit::Runner.compose_filter(self, options[:filter])
        args[1] = options if args[1].is_a?(Hash)

        super(*args)
      end
    end
  end
end

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors) if Minitest.respond_to?(:run_one_method)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
