#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = ['peter','jonathan']
SITENAME = 'data blog'
SITEURL = 'https://data-blog.netlify.com'
PATH = 'content'

TIMEZONE = 'America/Chicago'

DEFAULT_LANG = 'English'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 4
DEFAULT_DATE = 'fs'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Main menu items
HEADER_MENUITEMS = [('HOME', '/')]
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = True

# Theme
THEME = "themes/material"

# Ipynb plugin
MARKUP = ('md', 'ipynb')

PLUGIN_PATHS = ['./plugins']
PLUGINS = ['ipynb.markup']

# Ignore checkpoints
IGNORE_FILES = ['.ipynb_checkpoints']

# Disqus
# Note that as this https://disqus.com/home/discussion/channel-discussdisqus/issue_adding_disqus_to_pelican/
# page points out, the disqus_url has to be an absolute path with the protocol. See
# SITENAME above, the value of which is the same full Website URL value entered into
# Disqus admin.
DISQUS_SITENAME = "data-blog-1"
