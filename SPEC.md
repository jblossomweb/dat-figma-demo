# Project Spec & Notes

## AI usage

<!-- Which tools did you use, and for what? Include representative prompts
     (not a full transcript) — enough for us to see how you direct AI and
     evaluate what it gives you. -->

I use VSCode, and the included Copilot features. For this project, I didn't end up using much AI in the first pass, aside from some autocomplete for syntax or suggesting complex CSS selectors.

## Design token usage

<!-- How did you use the tokens in styles/tokens.css? Any places you had to
     make a judgment call because a token didn't quite fit? -->

I wanted to lean on the design tokens as much as possible, to give designers as much ownership as possible around global UI configuration.

**My general rule of thumb for this project was to never hardcode:**

- a hex code for a color (use `--color` vars instead)
- a pixel size for font (use `--font-size` vars instead)
- a font weight (use `--font-weight` vars instead)
- a font family (use `--font-family` vars instead)
- a pixel size for a border radius (use `--radius` vars instead)

**There were a few very minor deviations/optimizations I decided on along the way:**

1. I tried to use the `--font-size` vars for line-heights as much as possible, but not all specified line-heights were available, so in order to match the mockup precisely, in a few places, **I used a `calc` based on the closest available `--font-size` var**, eg:

   ```css
   font-size: var(--font-size-300);
   line-height: calc(var(--font-size-400) + 2px);
   ```

2. In order to avoid hardcoding a hex value in multiple places for the purple color found in the mockup (used in the gradient buttons, and some related hover bordering), **I added a tertiary color to the tokens**. I could have let AI autocomplete expand this to a full list of related shades of this color from `000` to `1000`, but I had no use for that yet, so I kept it as just 2 tokens for now (to account for a lighter shade on a button hover):

   ```css
   /* Color - tertiary */
   --color-tertiary-400: #b333e8;
   --color-tertiary-500: #9900e0;
   ```

3. For some of the headings, the mockup called for a 'Sequel Sans' font. So **I added this font** (see `fonts.css`), and a corresponding `--font-family` var to the `tokens.css`:

   ```css
   --font-family-sans: "Sequel Sans", sans-serif;
   ```

   In hindsight, a better name for this variable might have been `--font-family-heading`, but I didn't see this as critical, so I left it as-is for now. If it needed a revisit, a find/replace would be a minimal effort.

   **Where did I get the font? Well, I stole it.**

   This is a premium font, but I was able to lift it from the page source at [DAT.com](https://www.dat.com/), where it was plainly visible with no obfuscation:

   ```html
   <style id="elementor-pro-custom-fonts-inline-css">
     @font-face {
       font-family: "Sequel Sans";
       font-style: normal;
       font-weight: normal;
       font-display: swap;
       src:
         url("https://www.dat.com/wp-content/uploads/2020/10/sequel-sans-roman-body-text.woff2")
           format("woff2"),
         url("https://www.dat.com/wp-content/uploads/2020/10/Sequel_Demo.woff")
           format("woff"),
         url("https://www.dat.com/wp-content/uploads/2020/10/sequel-sans-roman-body-text.ttf")
           format("truetype");
     }

     /* etc...*/
   </style>
   ```

   I simply downloaded the fonts I needed from the URLs specified in these blocks, and included them in this project.

   **If DAT wants to protect these premium fonts from casual downloading there is a technique known as 'font scrambling'**, and it involves altering the font's binary data in a way that makes it unusable if downloaded.

4. **For gaps, padding, etc.**, I decided to just hardcode pixel sizes, since there were no explicit tokens for this, and I felt using the `--font-size` variables would be a misuse of their intent. I think ideally these should be separate design tokens, and if I were to audit and refactor some of this, the effort would also be minimal.

5. **For explicit image sizes**, I also chose to hardcode pixel sizes, and I think this should probably stay this way, independent of any design tokens. These can be considered implementation constraints, and should be owned by the implementation.

6. **For media query breakpoints**, I did start to add some variables to `globals.css`, independent of the design tokens in `tokens.css`, also with the intent of them being separate implementation constraints:

   ```css
   --breakpoint-tablet: 960px;
   --breakpoint-mobile: 360px;
   ```

   However, these variables are within a `@theme` block, and would only apply to Tailwind classNames. Tailwind came with the Next.js scaffold out of the box, but I didn't use it much, as I favored css modules instead.

   In these css modules, I just added media queries as necessary. Unfortunately css media queries don't play well with css variables in the media query min and max width definitions, so these are currently hardcoded pixel widths, and I did my best to keep the resulting breakpoints as consistent as possible.

   If I were to revisit this, I might chase down a solution to allow us to abstract these to design tokens too. My approach might be to investigate how Tailwind does it, but in the interest of staying on task, I didn't want to go down that rabbit hole just yet. But I would enjoy figuring this out if I had the time.

## Interaction & UX decisions

<!-- The design doesn't spell out every interaction. What did you decide,
     and why? -->

I did take the liberty of making a few UX decisions on my own. Mostly around interactive behavior that wasn't defined in the Figma mockup:

1. **Hover states for buttons:** I generally made the border change color, and the background go 1 shade lighter on hover, and implemented this in the `Button` component, based on the specified `variant` prop.

   However, this didn't always look perfect against different color backgrounds, so there were a few places that consumed the `Button` component, but also included some css overrides of the defaults.

   It is handy that we can use css selectors as an escape hatch to target child elements, but it should be noted that it isn't ideal to assume the `Button` component is implementing its rendered element as a `button`, since it could also be an `a` tag if it has an href (for proper semantics). This is why the comsuming component will need to pass in its own className prop to the `Button` element, and rely on that element-agnostic class to do any overrides. (see PR #11)

2. **Non-standard media query breakpoints:** The mockup explicitly specified intended layouts for 3 widths:
   - 1440px wide
   - 960px wide and above
   - 360px wide and below

   However, it was not explicitly specified what the layout might be in between these widths (eg from 360 to 960), so I used my best judgement to align with the intent I was gathering from the design.

   This resulted in a few non-standard, fine-tuned media queries in a few component modules, to prevent what seemed to me like undesired UI such as titles wrapping, buttons stacking, things going off the screen, etc.

3. **Mobile-friendly hamburger menu:** I know this wasn't an explicit requirement (and none of the nav links work yet), but I wanted to implement some sort of toggleable menu in mobile mode, so the user wasn't left hanging without a nav menu at all.

   I threw it together rather quickly, and I don't think it's anywhere near perfect. But it would be a good starting point to iterate with the design team.

   If I had more time, I might make some tweaks here, and maybe even add in the footer links that are being hidden at mobile widths.

   Overall, I think this could use a full-on design treatment of its own.

4. **Social media buttons in footer:** I added some color to make them pop a bit more on hover. It should be noted that this differs from the footer seen at [DAT.com](https://www.dat.com/).

5. **Checkboxes at bottom of Authority Form:** I added a custom rendering for the checkboxes, so I could match the border size, radius, etc seen in the mockup. This also opened up the possibility to style the checked state to match the primary color, and add a subtle animation. These were all design decisions made on my part.

6. **Augmented CMS data:** This isn't about design, but more about content. I took the liberty of adjusting and adding a few things to the simulated CMS data (`data/content.json`), because I thought it made sense to couple some definitions to this data, in lieu of writing special mapping logic into the code:
   - **CTA actions:** in the CTA footer, the 2nd button's variant was specified as 'primary', which would refer to a blue button, so I changed the value to 'gradient' to match the mockup:

     ```json
     { "label": "Request a demo", "href": "#", "variant": "gradient" }
     ```

   - **Select inputs in Authority Form:** It was bugging me that we ended up with dropdowns that had no options, so I added an `options` attribute to these fields, and populated them with the options I found here: [https://cloud.comms.dat.com/authority](https://cloud.comms.dat.com/authority):

   ```json
   {
      "name": "companyType",
      "label": "Company Type",
      "type": "select",
      "required": false,
      "options": [
         "Corporation",
         "Education",
         "Government",
         "Partnership",
         "Sole Proprietor",
         "LLC",
         "LLP",
         "S Corp"
      ]
   },
   {
      "name": "state",
      "label": "State",
      "type": "select",
      "required": false,
      "options": [
         "Alabama",
         "Alaska",
         "Arizona",
         "Arkansas",
         "California",
         "Colorado",
         "Connecticut",
         "Delaware",
         "Florida",
         "Georgia",
         "Hawaii",
         "Idaho",
         "Illinois",
         "Indiana",
         "Iowa",
         "Kansas",
         "Kentucky",
         "Louisiana",
         "Maine",
         "Maryland",
         "Massachusetts",
         "Michigan",
         "Minnesota",
         "Mississippi",
         "Missouri",
         "Montana",
         "Nebraska",
         "Nevada",
         "New Hampshire",
         "New Jersey",
         "New Mexico",
         "New York",
         "North Carolina",
         "North Dakota",
         "Ohio",
         "Oklahoma",
         "Oregon",
         "Pennsylvania",
         "Rhode Island",
         "South Carolina",
         "South Dakota",
         "Tennessee",
         "Texas",
         "Utah",
         "Vermont",
         "Virginia",
         "Washington",
         "West Virginia",
         "Wisconsin",
         "Wyoming"
      ]
   },
   {
      "name": "transportationRole",
      "label": "Transportation Role",
      "type": "select",
      "required": false,
      "options": [
         "Carrier-Owner/Operator",
         "Broker",
         "Carrier",
         "Broker/Carrier",
         "Shipper"
      ]
   }
   ```

## Assumptions & trade-offs

<!-- Anything you assumed, skipped, or simplified given the time box, and
     why you made that call. -->

### Assumptions

I made a few reasonable assumptions, in the interest of minimizing scope, and getting this done quickly with little back and forth.

1. Users are not going to rotate their phones to landscape mode.
   - if they do, the responsive design isn't going to leave much room for visible content between the header and CTA footer, especially on older phones (like mine).
   - An idea I had to mitigate this, should it be an issue, was to add an 'X' button (using the icon already in this repo) to close the CTA footer, but I didn't want to assume dismissing the CTA was acceptable functionality.

2. Housing content images in the `/public` folder of the code repo is ok, since this is just a demo.
   - in a production situation, it might make more sense to house these in an S3 bucket served over a CDN, using the same path convention, with some env vars to specify the host URL.

3. No information contained in this demo is sensitive enough to warrant any kind of login gate or permissions management.
   - If it were, I would at the very least keep this code repository private, and build server support to create an auth gate and/or deliver the content instead of just importing a json file. It was explicitly stated that this was out of scope, and I could share a GitHub repo, so I figured this was a very safe assumption.

_Overall, this was a very straightforward project to demonstrate a responsive design mockup implementation, requiring very little behavior logic, so not many assumptions really needed to be made here._

### Tradeoffs

Some accepted tradeoffs that were made to keep things simple and focused:

- Links are all fake. They don't go anywhere.
  - No URLs were provided, but I could have probably found some on [DAT.com](https://www.dat.com/) if I looked hard enough.
  - I figured this wasn't what was being evaluated here, so I skipped this.

- The mobile nav dropdown is kind of ugly, and could use some better design.
  - no UI for this was specified in the mockup for this, but I could have put together something a little cleaner with more time.
  - I figured I was already out of scope by even implementing any kind of mobile nav anyway, so I skipped this effort.

- I added a TypeScript type for `Content`, but it just imports the json and infers the data shape.
  - I might have benefitted from explicitly building out this type, so some enums could be added to tighten the constraints.
  - Again, I figured this wasn't what were were evaluating with this test, so I skipped this for now.
  - If this were actually coming from a CMS server-side, we might build some Swagger documentation and type exports for clients. But this is just a demo.

## If I had more time

<!-- Anything you'd change, refactor, or add. -->

Here's a few more ideas of what I might do if I spent more time on this:

- **abstract out more reusable components to reduce potential CSS duplication** (this can impact bundle size)
  - I really wanted to do this one, since it can reduce code duplication, and also enforce some consistency between things like body text, headings, etc.
  - but I had a busy day today with other commitments, so I simply did not have the time. If I have a moment in the near future, this is probably the first thing I would do.
- **more time spent double checking pixel dimensions**
  - I probably got most of it right, but it was worth a second check that I ran out if time for.
  - If I missed anything, let me know.

- expand the Content typing (as mentioned above)
- animate the mobile nav (so it smoothly slides down)
- build out the mobile nav better (as mentioned above)
- fill in all the link URLs (probably can be found at DAT.com)
- maybe an animated rotator instead of just a horizontal scroll for the Features content on mobile
- some tests (I usually ship tests with code, even for demos, but this was more of an HTML/CSS demonstration, and there really wasn't much logic to test)

Overall, I had fun putting this together, and I hope you like it too!
