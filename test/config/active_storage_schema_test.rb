require "test_helper"

class ActiveStorageSchemaTest < ActiveSupport::TestCase
  test "active storage tables exist for the spina media picker" do
    data_sources = ActiveRecord::Base.connection.data_sources

    assert_includes data_sources, "active_storage_blobs"
    assert_includes data_sources, "active_storage_attachments"
    assert_includes data_sources, "active_storage_variant_records"
  end
end
