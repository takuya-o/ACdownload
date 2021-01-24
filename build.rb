#!/usr/bin/env ruby
# -*- coding: utf-8-unix -*-

require 'rubygems'
require 'crxmake'

# CrxMake.make(
#    :ex_dir => "./src",
#    :pkey   => "./ACdownload.pem",
#    :crx_output => "./ACdownload.crx",
#    :verbose => true,
#    :ignorefile => /(.*\.swp|.*~|.*\.(pem|crx|zip|md|rb|sh|gitignore))/,
#    :ignoredir => /(\.(?:svn|git|cvs))|(nbproject|test|config|resource|for*)/
#  )

CrxMake.zip(
  :ex_dir => "./src",
  :pkey   => "./ACdownload.pem",
  :zip_output => "./ACdownload.zip",
  :verbose => true,
  :ignorefile => /(\.swp|.*~|\.ts|\.map)/,
  :ignoredir => /\.(?:svn|git|cvs|AppleDouble)/
)
