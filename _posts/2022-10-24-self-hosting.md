---
layout: post
title: Notes on Self Hosting
---

This past year I've started self hosting some services on a small home server. A lot of people have complex, expensive and rather overwhelming homelabs but my lone server setup falls on the cheaper and simpler end of the spectrum. 

Let's start with the hardware, I run a second hand HP EliteDesk G2 800 Mini containing 8GB RAM, a 120GB SSD and an external 1TB USB 3.0 hard disk. I also run a Raspberry Pi model 3B. 

All my services run on docker, and I backup docker compose files for easier redeployment were something to go wrong after bringing a system back online. The Raspberry Pi runs the following services:

- Grafana
- Prometheus for metrics
- [Home Assisstant](/projects/smarthome)
- Pihole

And the HP runs 

- Some local web servers for testing  
- Postgres instances
- Plex
- ELK stack
- Homer