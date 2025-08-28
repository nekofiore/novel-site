---
type: 'novel'
layout: 'single'
date: '{{ .Date }}'
draft: true
series: '{{ replace .File.ContentBaseName "-" " " | title }}'
title: 'N/A'
---
