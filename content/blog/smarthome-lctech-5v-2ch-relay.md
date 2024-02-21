---
title: "LC Technology 5V 2 Channel Relay Board - ESPHome"
excerpt: 'I purchased several of these relay boards from AliExpress due to their low price point and had intended to use them with Home Assistant by either flashing Tasmota or ESPHome.'
coverImage: '/posts/smarthome-lctech-5v-2ch-relay/image-01.png'
date: '2023-12-19T05:35:07.322Z'
author:
  name: Stefan Todorovic
  picture: '/assets/headshot.jpg'
ogImage:
  url: /posts/smarthome-lctech-5v-2ch-relay/image-01.png'

---

## Introduction
I purchased several of these relay boards from AliExpress due to their low price point and had intended to use them with Home Assistant by either flashing Tasmota or ESPHome.

They contain an removable ESP-01 which is easy enough to reprogram, however the relays are controlled by an onboard N76E003/STM8S003 via serial instead of a traditional relay board which pulls a pin high.

I tried to use the documentation from the [Blackadder Tasmota templates directory](https://templates.blakadder.com/LC-Relay-ESP01-2R-5V.html) with no luck. The relays were not responsive.

## The Solution
I decided to use [ESPHome](https://esphome.io/index.html) and its built in [UART Bus Component](https://esphome.io/components/uart) with the documention to create a custom configuration file. 

<script src="https://emgithub.com/embed-v2.js?target=https://github.com/steftodor/esp-home-config/blob/main/LC%20Technology%202%20Channel/config.yaml&style=default&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>


## Uploading the Configuration
The following relies on the assumption that you have a configured instance of Home Assistant and the ESPHome Integration Installed.

1. Launch Home Assistant in Chrome (this is not required but makes it easier to program the ESSP-01)
2. Open ESPHome in Home Assistant and click New Device
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-01.png)
3. Plug your programmer and ESP-01 into your computer.

If you're using a cheap programmer you will need to briefly connect GPIO0 to ground in order to be able to program the board.
4. Click Connect and select the board from the menu that appears. Will likely appear as 'USB2.0 to Serial' or something similar.
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-02.png)
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-03.png)

5. Allow the board to be programmed, once completed you will see a message. If you get the error message I get you can try disconnecting the programmer and connecting it to power again.
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-04.png)
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-05.png)
6. Once the board appears online, click edit and add the highlighted portions of code from [my github configuration](https://github.com/steftodor/esp-home-config/blob/main/LC%20Technology%202%20Channel/config.yaml)
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-06.png)
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-07.png)

7. Save and Click Install (I recommend Wirelessly), wait for the install to finish
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-08.png)
8. Once the programming is done, remove the ESP-01 from the programmer and place it in the relay board
![](/posts/smarthome-lctech-5v-2ch-relay/image-01.png)
9. Power up the relay board
10. Navigate to Integrations in Home assistant, if the doesn't show up in auto discovery, add it manually with the IP Address
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-09.png)
10. Test it out

Verify that the functions work correctly
![](/posts/smarthome-lctech-5v-2ch-relay/screenshot-10.png)


## Extras: 3D Printed Case
On Thingiverse I found  [ESP-01 Dual Relay Housing Box by travio](https://www.thingiverse.com/thing:5323737).
This case works quite well. Depending on your 3d printer you may need to scale down the dimensions of the lid to ensure a snug fit.

### Links
- [Aliexpress - ESP8266 ESP-01 5V 1 Channel 2 Way WiFi Relay Module ](https://www.aliexpress.com/item/1005004533412591.html?spm=a2g0o.order_list.order_list_main.128.2e991802f196CF)
- [Aliexpress - ESP01 Programmer Adapter UART GPIO0](https://www.aliexpress.com/item/32473178476.html?spm=a2g0o.order_list.order_list_main.118.2e991802f196CF)
- [Official Documentation](http://www.chinalctech.com/xwzx/24.html)
- [Blackadder Tasmota Template](https://templates.blakadder.com/LC-Relay-ESP01-2R-5V.html)
- [ESPHome](https://esphome.io/index.html)
- [My Github Repo with Config](https://github.com/steftodor/esp-home-config/tree/main/LC%20Technology%202%20Channel)
- [ESP-01 Dual Relay Housing Box by travio](https://www.thingiverse.com/thing:5323737)