## Atom

Okay, we're all done with RSS now (unless you haven't read my post about it yet.) How about we move to Atom?

### What Is Atom?

Atom is, well, a web feed just like RSS. Almost every feed reader out there supports both Atom and RSS. Atom is also based on XML, just like RSS.

Some things are a little different though, like how Atom is able to support relative links, and pubDates—or "updated" dates in this case—are formatted differently.

### Okay, but why use it?

You don't really have to. Atom vs. RSS is all a matter of personal preference. I started out using RSS because it's the first thing I saw and also due to the lack of resources on how to make an Atom feed out there.

I personally like Atom more because it separates summaries and full content, it can handle multiple languages, and it can handle relative links as I've said before.

### Example Feed

```
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:base="https://your-main-site.com/">

<title>feed title</title>
<subtitle>posts from your-website.com</subtitle>
<updated>2026-09-05T23:32:35Z</updated>
<author>
		<name>your name</name>
    <email>email@domain.com</email>
	</author>
  <id>tag:yourdomain,2026-09-05:/yourfeed.xml</id>
  <link href="https://your-main-site.com/" rel="alternate"/>
	<link href="link-to-your-feed.xml" rel="self" type="application/atom+xml"/>


<entry>
		<id>tag:your-website.com,2026-09-05:/posts/yourpost.html</id>
		<title>Title</title>
		<updated>2026-09-05T02:57:00Z</updated>
		<author>
			<name>your name</name>
       <email>email@domain.com</email>
		</author>
		<link rel="alternate" href="posts/yourpost.html"/>
		<summary>Your post summary</summary>
   <content type="html">
   <![CDATA[
   <p>The full content of your post, in the case an alternate link isn't included.</p>
   ]]>
   </content>
</entry>

</feed>
```

I've taken the liberty of greying out everything (in post processing) that you can remove without getting your feed invalidated once again.

Okay, this seems a little difficult to navigate. Let's explain everything bit by bit.

You'll notice that at the way top, there's this `xml:base` bit that links to your hypothetical website. That's what allows for you to use relative links inside of your feed.

If you look below, specifically at `<link rel="alternate" href="posts/yourpost.html"/>`, you'll see said relative link. In this example, the link will resolve to `https://your-main-site.com/posts/yourpost.html`.

Something else you'll notice are the `content` and `summary` tags I mentioned earlier. Both of them are optional\*, but if you don't include a link to your post in your entry, you must add the content tag so people can still view your post.

\*I do recommend adding at least one of these. Nobody enjoys ONLY looking at post titles on their reader.

The `content`, `summary`, and `title` tags can include HTML, but you must include `type="html"` in your opening tag like this: `&lt;title type=html"&gt;`

Your HTML must also be escaped (i.e. replacing < and > with &lt; and &gt; respectively.) This isn't needed if you escape all of your HTML using [CDATA](https://www.w3.org/TR/REC-xml/#dt-cdsection).

I know what you're thinking. "Saif, what the hell is that date format? And what's that thing in the id tags?" I'll start with the dates first.

### Dates

Dates in Atom feeds must be in the [RFC 3339](http://www.faqs.org/rfcs/rfc3339.html) format. I won't bore you with the details. The first half is a regular old date in the order of `yyyy-mm-dd`.

The second half is the time. It starts with `T` followed by the 24-hour time including seconds, so if it's 6PM it'd be something like `T18:00:00`. At the end is your timezone which is signified by the `Z`. The default timezone is UTC, but if you'd like another timezone you can replace the `Z` with the offset (such as -05:00).

### IDs

The `id` is a tag: URI, one of the many ways you can choose an ID for your feed or entry. The example below is for entries specifically, and is rephrased from [this page](https://web.archive.org/web/20110915110202/http://diveintomark.org/archives/2004/05/28/howto-atom-id). I'll use this very post as my permalink URL.

1. "Discard everything before the domain name."

`7vtia.nekoweb.org/posts/atom.html`

2. "Change all # characters to /"

No changes

3. "Immediately after the domain name, insert a comma, then the year-month-day that the article was published, then a colon. Be sure to use a four-digit year, two-digit month, and two-digit day. Don’t forget the colon."

`7vtia.nekoweb.org**,2026-06-09:**/posts/atom.html`

4. "Add `tag:` at the beginning. (Don’t add slashes; it’s just “tag:“. That’s a common mistake.)"

`tag:7vtia.nekoweb.org,2026-06-09:/posts/atom.html`

The article also talks about the reason why you shouldn't use your permalink as your ID.

I used the same process for my feed ID. I took my main domain, the (approximate) date I started "owning" it, and added `tag:` at the beginning.

### Feed Readers

The process for adding an Atom feed to your feed reader is the exact same as an RSS feed. You can view my post on RSS for more information.

### Links

Here are some links if you want to read more on Atom feeds (or validate your feed.)

1. [W3C's Introduction to Atom](https://validator.w3.org/feed/docs/atom.html)
2. [Feed Validator](https://validator.w3.org/feed/)
