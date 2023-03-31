# bustinbung.com

My personal webpage and blog.

## Theme information

I'm using a modified version of [**consolo**](https://github.com/Forthoney/consolo). It combines parts of **consolo** with the last theme I used, [**no-style-please**](https://github.com/riggraz/no-style-please).

## _config.yml
Stores configuration settings and global variables for the site.

### Options
[Jekyll default configurations](https://jekyllrb.com/docs/configuration/default/) apply.

#### Options from `jekyll-theme-console`
- `header_pages`: list of pages to be displayed in navbar
- `google_analytics`: tracking id (no Google Analytics code will be loaded if you don't set this option)
- `listen_for_clients_preferred_style`: boolean on whether to allow users to choose light or dark style based on their preferences ([see also](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme))
- `style`: predefined color scheme to be used for the site. Color scheme options are discussed more later.

#### New from consolo
- `title`: the title of the website (yes, this was missing from the original)
- `footer`: message to display at footer. NO LONGER ACCEPTS RAW HTML
- `author`: display various information about the author
   - `name`: author's name
   - `email`: author's email. ~~Can nest multiple email with titles~~
   - `github_username`: author's github username (not the full url). Automatically creates a link to the author's github profile
   
#### Modifiications
- `goatcounter-analytics`: for people who prefer goatcounter over Google Analytics. Not loaded if not set.
- `date-format`: sets the date format

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
