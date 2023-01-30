# consolo

**consolo** aims the recreate the rugged look of a terminal/console interface while maintaining legibility.

It is forked from [jekyll-theme-console](https://github.com/b2a3e8/jekyll-theme-console) which, as far as I can tell, is no longer maintained.
**consolo** refines the general look of the original theme, standardizes content, and greatly improves on extensibility. 
Parts of the installation guide also come from the original theme.

[Live Demo](https://forthoney.github.io/) (aka my own blog)

## Screenshots

![Collage of themes](theme_collage.png)

## Installation

### Prerequisites

If you're starting with Jekyll from scratch, follow the steps in [the Quickstart Guide](https://jekyllrb.com/docs/). Skip this if you already have an existing jekyll project.

### Install as Remote theme for GitHub Pages

Set `remote_theme` in your project's Jekyll `_config.yml` file:

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

### _config.yml
In addition to the [jekyll default configurations](https://jekyllrb.com/docs/configuration/default/), consolo allows you to display additional information through options.

#### Options from jekyll-theme-console
- `header_pages`: list of pages to be displayed in navbar
- `google_analytics`: tracking id (no Google Analytics code will be loaded if you don't set this option)
- `listen_for_clients_preferred_style`: boolean on whether to allow users to choose light or dark style based on their preferences ([see also](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme))
- `style`: predefined color scheme to be used for the site. Color scheme options are discussed more later.

#### New from consolo
- `title`: the title of the website (yes, this was missing from the original)
- `footer`: message to display at footer. NO LONGER ACCEPTS RAW HTML
- `author`: display various information about the author
   - `name`: author's name
   - `email`: author's email. Can nest multiple email with titles like
   ```YAML
   email:
      personal: example@personal.com
      school: example@school.edu
   ```
   - `github_username`: author's github username (not the full url). Automatically creates a link to the author's github profile

### Style/Color Scheme
You can now more easily create your own color scheme. Under the `_sass/` directory, create a new file with the name `_<stylename>.scss` (e.g. `_red.scss`).
I recommend using one of the existing color scheme's SCSS file as a starting point.

Once you have customized the color scheme, go to the `assets/` directory and create a new file named `main-<stylename>.scss` with the following contents:
```SCSS
@import "<stylename>";
@import "base";
```
You have successfully created a new style!
To change to a style, simply set the `style` in `_config.yml` to <stylename>.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Forthoney/consolo. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `consolo.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

