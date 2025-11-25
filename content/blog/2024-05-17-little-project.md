+++
title = "I'll just advertise my little project here"
date = "2024-05-17T12:01:16+00:00"
slug = "little-project"

#
# lastmod is optional
#
# lastmod = "Timestamp that you edit this blog"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = ["blog", "projects"]
+++

I’m just documenting various small projects. That is not worth having a place on the future "/projects" page

## Scriptbox
Literally anything that i can share to the public!

### Still Maintaining :
 * [Build-gitea](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/build_gitea) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/build_gitea) A simple script to build Gitea and its Static on amd64.
 * [Nginx Build Script](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/nginx_build_script) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/nginx_build_script) A script to build Nginx with QUIC support. Also, with Ngx_Lua and ModSecurity as options. Not just that, Choices of SSL Libraries is also available!
 * [CrowdSec Notifications](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/crowdsec-notifications) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/crowdsec-notifications) A simple notification template for Crowdsec Alerts to Discord and Line.
 * [CrowdSec Nginx Bouncer](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/crowdsec-nginx-bouncer) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/crowdsec-nginx-bouncer) A modified [CrowdSec Nginx Bouncer](https://github.com/crowdsecurity/cs-nginx-bouncer) install script to build every dependency instead of relying on apt install.
 * [sysstat](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/sysstat_webhook)/[vnstat](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/sysstat_webhook) Webhook ? [Git](https://github.com/minoplhy/scriptbox/tree/main/sysstat_webhook)[Hub](https://github.com/minoplhy/scriptbox/tree/main/vnstati_webhook) A script to generate graphics stats for sysstat and vnstat. Then Webhook to Discord.

### Maintaining but Partly Broken :
 * [Personal Gitea UI](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/Gitea-ui-customized) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/Gitea-ui-customized) Starting from Gitea 1.21 Custom CSS theme is broken due to large UI(?) changes(will not fix). Templates is still working tho.

### Not Maintaining but possibly still working :
 * [IP List Generator](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/IP_List_generator) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/IP_List_generator) Generate a deny list in Nginx, Htaccess, and Caddy format. Considering its simple code, everything should work fine!
 * [PowerDNS API SOA](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/PowerDNS) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/PowerDNS) Setting PowerDNS to increase SOA serial number on each API request on all zones.
 * [WireGuard Windows Multi-Tunnel](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/WireGuardMultiTunnel) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/WireGuardMultiTunnel) Allow WireGuard Windows to start "Multiple Simultaneous Tunnels". I don't know if Multi-Tunnel is officially available as an option, but should work fine.
 * [Free Ram on Linux](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/Free-da-Ram) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/Free-da-Ram)

### Not Maintaining and possibly not working :
 * [1984.is Certbot script](https://chy.li/p-p/minoplhy/scriptbox/src/branch/main/1984DNS) ? [GitHub](https://github.com/minoplhy/scriptbox/tree/main/1984DNS) A script for 1984.is Let's encrypt certbot. I personally moved to Acme.sh. 1984.is doing some changes on their URL and API referring to [Acme.sh issues](https://github.com/acmesh-official/acme.sh/issues/2851#issuecomment-1100602770). So, the code is no longer working from at least April 2022.

### Planning to do :
 * NOPE

{{< rawhtml >}}
<br><br>
{{< /rawhtml >}}

## Adblock filters project
Filters : [Gitea](https://chy.li/p-p/readonly/filters)/[GitHub](https://github.com/minoplhy/filters)

Filters-Maker : [Gitea](https://chy.li/p-p/minoplhy/filters-maker)/[GitHub](https://github.com/minoplhy/filters-maker)

Filters-Build : Gitea/[GitHub](https://github.com/minoplhy/filters-build)

Filters-Converter : Gitea/[GitHub](https://github.com/minoplhy/filters-converter)

### Not Maintained and now on Auto-Pilot

A Project to convert/generate various AdBlock formats, especially DNS Level Blocklist. I personally moved on from an Adblock project. 

The only still-building project is the [filters](https://github.com/minoplhy/filters) repository which relies on the [filters-maker](https://github.com/minoplhy/filters-maker) repository. but, the whole project is now on Auto-Pilot, and will only commit when shit happens.

Also, no new features will be added. Unless created from scratch. Due to its bad coding practices. Adding new features except for new regex is nearly impossible.

{{< rawhtml >}}
<br><br>
{{< /rawhtml >}}

## Nginx with no root
Gitea/[GitHub](https://github.com/minoplhy/nginx-noroot)

### Not maintained but looking to re-build from scratch

A script to build Nginx entirely without relying on root privileges. Currently shifted interest on "Nginx Build Script" but looking to re-build this project from scratch.

{{< rawhtml >}}
<br><br>
{{< /rawhtml >}}

## Duckduckgo images api
Gitea/[GitHub](https://github.com/minoplhy/duckduckgo-images-api)

### Not Maintained

A POC Golang project to recreate Python's duckduckgo-images-api, if Duckduckgo hadn't changed their API, everything should've worked fine.

{{< rawhtml >}}
<br><br><hr>
{{< /rawhtml >}}

It's been nearly years since my last blog, Also, this isn't exactly counted as a blog. but still, I'm looking forward to writing on more topics this year but again, it depends.

![Footer Gif](/images/blog/little-project/footer.gif)