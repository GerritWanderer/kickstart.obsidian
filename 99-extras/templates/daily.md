---
created: <% tp.file.creation_date() %>
tags:
  - type/daily
---
## 🎯 Today's Focus
- [ ] one
- [ ] two
- [ ] three

## 🔥 What I'm Excited About
```
```

## 🤔 What I'm Struggling With
```
```

## Daily notes section

<% tp.file.cursor() %>

## Notes created today

```dataview
TABLE
tags as Tags,
germinated as Germinated
FROM ""
WHERE dateformat(file.cday, "yyyy-MM-dd") = dateformat(this.file.day, "yyyy-MM-dd")
AND file.name != this.file.name 
SORT file.ctime ASC
```