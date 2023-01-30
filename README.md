# consolo

**consolo** aims the recreate the rugged look of a terminal/console interface while maintaining legibility.

It is forked from [jekyll-console-theme](https://github.com/b2a3e8/jekyll-theme-console) which, as far as I can tell, is no longer maintained.
**consolo** refines the general look of the original theme and greatly improves on extensibility. 
Parts of the installation guide also come from the original theme.

## Installation

### Prerequisites

If you're starting with Jekyll from scratch, follow the steps in [the Quickstart Guide](https://jekyllrb.com/docs/). Skip this if you already have an existing jekyll project.

### Install as Remote theme for GitHub Pages

1. Set `remote_theme` in your project's Jekyll `_config.yml` file:

   ```yaml
   remote_theme: Forthoney/consolo
   ```

### Install as Gem

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "consolo"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: consolo
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install consolo

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `consolo.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

