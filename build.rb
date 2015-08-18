#!/usr/bin/env ruby
# -*- coding: utf-8-unix -*-

require 'rubygems'
require 'crxmake'

CrxMake.make(
  :ex_dir => ".",
  :pkey   => "./ACdownload-crxmake.pem",
  :crx_output => "./ACex.crx",
  :verbose => true,
  :ignorefile => /(\.swp|.*~|\..*|\.(pem|crx|zip|md|rb))/,
  :ignoredir => /\.(?:svn|git|cvs|nbproject|test|config|resource)/
)

CrxMake.zip(
  :ex_dir => ".",
  :pkey   => "./ACdownload.pem",
  :zip_output => "./ACex.zip",
  :verbose => true,
  :ignorefile => /(\.swp|.*~|\..*|\.(pem|crx|zip|md|rb))/,
  :ignoredir => /\.(?:svn|git|cvs|nbproject|test|config|resource)/
)
