---
slug: whatever
title: New blog post
author: saurabh
author_title: SDE-2
tags:
  - welcome
date: 2021-05-19
---
Checking if this blog gets deployed on netlify hehehe

---
title: cli gitlab — gitlab cli
description: >-
  Do you use gitlab? Do you create lot of merge requests for code review? You
  also like working on the command line. Wouldn't it be great to…
date: '2017-02-25T11:42:08.652Z'
categories: []
keywords: []
slug: /@vishwanatharondekar/cli-gitlab-gitlab-cli-b5984dc7f7be
---
Do you use [gitlab](https://gitlab.com)? Do you create lot of merge requests for code review? You also like working on the command line. Wouldn't it be great to have your merge requests created from the command line itself.
Earlier working with github I had great success using [hub](https://github.com/github/hub) from command line. I started looking for similar tool for gitlab.
Unfortunately I didn't find any tool which could create merge request for me painlessly like I could do with hub, so I decided to create one myself.
Outcome was [gitlab-cli](https://github.com/vishwanatharondekar/gitlab-cli)
### gitlab cli
Gitlab-cli tries to re-create some of the useful functionalities present in hub. It is built in nodejs. You can find the install instructions at [gitlab-cli](https://github.com/vishwanatharondekar/gitlab-cli)
As of now it can do following for you
```
create-merge-requestbrowsecompareopen-merge-requests
```
### create-merge-request
Using _create-merge-request_ you can create merge request painlessly. All the information needed for options can be obtained automatically on basis of repository, current branch and remote gitlab URL set.
Surely, you can override these options to create merge request between the branches or forks you need.
A simple usage of the gitlab-cli to create merge request looks like following
gitlab-cli create-merge-request
You can check all the available options at [gitlab-cli#options-for-create-merge-request](https://github.com/vishwanatharondekar/gitlab-cli#options-for-create-merge-request)
### Other commands
It has support for some other commands as well, which you might be interested in.
1.  **browse** — Open the browse page of the branch on gitlab
2.  **compare** — Open the compare page between two branches.
3.  **open-merge-requests** — Open the merge requests page of the repo in gitlab for looking at all the merge requests raised.
### Conclusion
I hope you will find using [gitlab-cli](https://github.com/vishwanatharondekar/gitlab-cli) helpful for you. If you have any suggestions or feedback about gitlab-cli, you can create the [issues](https://github.com/vishwanatharondekar/gitlab-cli/issues) on the github project.
If you have any suggestions, questions or feedback about this article, feel free to comment.

