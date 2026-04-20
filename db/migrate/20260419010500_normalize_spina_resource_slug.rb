class NormalizeSpinaResourceSlug < ActiveRecord::Migration[6.1]
  def up
    execute <<~SQL
      UPDATE spina_resources
      SET slug = '{}'::jsonb
      WHERE slug IS NULL OR jsonb_typeof(slug) <> 'object';
    SQL

    change_column_default :spina_resources, :slug, from: nil, to: {}
  end

  def down
    change_column_default :spina_resources, :slug, from: {}, to: nil
  end
end
