# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouseaction.test.ts >> Mouse Action
- Location: tests\mouseaction.test.ts:4:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Test Automation Studio Demo Website : Mouse & Keyboard Actions"
Received: [Function title]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e3]:
    - link "TEST AUTOMATION STUDIO" [ref=e6] [cursor=pointer]:
      - /url: https://www.testautomationstudio.com/?ref=Logo
    - generic [ref=e7]:
      - link "Home" [ref=e8] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/
      - link "Blog" [ref=e9] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/blog/
      - link "Interview Questions" [ref=e10] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/interview-questions/
      - link "Tutorials" [ref=e11] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/tutorials/
      - link "Cheat Sheet" [ref=e12] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/cheat-sheet/
      - link "Products" [ref=e13] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/products/
      - link "Contact" [ref=e14] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/contact/
  - generic [ref=e16]:
    - generic [ref=e18]:
      - generic [ref=e20] [cursor=pointer]: Categories
      - generic [ref=e21]:
        - link "Validations" [ref=e24] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/validations/
        - link "Set Data" [ref=e27] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/set/
        - link "Get Data" [ref=e30] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/get/
        - link "Actions" [ref=e33] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/actions/
        - link "Browser" [ref=e36] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/browser/
        - link "Frames" [ref=e39] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/frame/
        - link "Miscellaneous" [ref=e42] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/misc/
        - link "Wait" [ref=e45] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/wait/
    - generic [ref=e47]:
      - generic [ref=e49] [cursor=pointer]: Mouse & Keyboard Actions
      - generic [ref=e51]:
        - generic [ref=e52]: Mouse Click
        - table [ref=e53]:
          - rowgroup [ref=e54]:
            - row "Single Click Single Click Button" [ref=e55]:
              - cell "Single Click" [ref=e56]
              - cell "Single Click Button" [ref=e57]:
                - button "Single Click Button" [ref=e58]
              - cell [ref=e59]
            - row "Double Click Double Click Button" [ref=e60]:
              - cell "Double Click" [ref=e61]
              - cell "Double Click Button" [ref=e62]:
                - button "Double Click Button" [ref=e63]
              - cell [ref=e64]
            - row "Hyperlink Link" [ref=e65]:
              - cell "Hyperlink" [ref=e66]
              - cell "Link" [ref=e67]:
                - link "Link" [ref=e68] [cursor=pointer]:
                  - /url: "#"
              - cell [ref=e69]
            - row "Context Click" [ref=e70]:
              - cell "Context Click" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
        - generic [ref=e75]: Drag and Drop
        - generic [ref=e76]:
          - list [ref=e77]:
            - listitem [ref=e78]: Item 1
            - listitem [ref=e79]: Item 2
            - listitem [ref=e80]: Item 3
            - listitem [ref=e81]: Item 4
            - listitem [ref=e82]: Item 5
          - list [ref=e83]:
            - listitem [ref=e84]: Item 1
            - listitem [ref=e85]: Item 2
            - listitem [ref=e86]: Item 3
            - listitem [ref=e87]: Item 4
            - listitem [ref=e88]: Item 5
        - generic [ref=e89]: Mouse Move
        - generic [ref=e90]:
          - table [ref=e92]:
            - rowgroup [ref=e93]:
              - row "Id | XPath | CSS Path | Classname | Name | Tagname | LinkText | Partial Link Text" [ref=e94]:
                - cell [ref=e95]
                - cell "Id" [ref=e96] [cursor=pointer]
                - cell "|" [ref=e97]
                - cell "XPath" [ref=e98] [cursor=pointer]
                - cell "|" [ref=e99]
                - cell "CSS Path" [ref=e100] [cursor=pointer]
                - cell "|" [ref=e101]
                - cell "Classname" [ref=e102] [cursor=pointer]
                - cell "|" [ref=e103]
                - cell "Name" [ref=e104] [cursor=pointer]
                - cell "|" [ref=e105]
                - cell "Tagname" [ref=e106] [cursor=pointer]
                - cell "|" [ref=e107]
                - cell "LinkText" [ref=e108] [cursor=pointer]
                - cell "|" [ref=e109]
                - cell "Partial Link Text" [ref=e110] [cursor=pointer]
                - cell [ref=e111]
          - table [ref=e112]:
            - rowgroup [ref=e113]:
              - row [ref=e114]:
                - cell [ref=e115]
  - insertion [ref=e119]:
    - iframe [ref=e121]:
      
  - generic [ref=e123]:
    - generic [ref=e125]:
      - link "Home" [ref=e126] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/
      - generic [ref=e127]: "|"
      - link "Feedback" [ref=e128] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e129]: "|"
      - link "Contact" [ref=e130] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e131]: "|"
      - link "Privacy Policy" [ref=e132] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e133]: "|"
      - link "Site Map" [ref=e134] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/sitemap/
    - generic [ref=e136]: copyright © testautomationstudio.com 2026
  - insertion [ref=e137]:
    - iframe [ref=e140]:
      - generic [active] [ref=f5e1]:
        - generic [ref=f5e6]:
          - generic [ref=f5e7]:
            - generic "Infineon" [ref=f5e8]:
              - link "Infineon" [ref=f5e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CEJAdsD5CasrMMJ6Pid4P2NOk6QufjIr8hgG56sXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE_gFP0NgEuAj9s7eBLOpgcs1jB_TmjPm8bWw2lbfyCnA6mONomj673k05TrvsdElBo9QMs19JBqHD_E3lEUHpT_7CtiMBlKjmN41vuagCDo8zCSxoLN6fac_Fss4w00kOV8u6vLn9FLAeHREzwKlLpoKDNExC1d6L24IUH-4K167pppppy7rxWdOZ8NCXrvoaPOXaKd5UdfIC5g_UfG52DhWTzLWx8XKpRr6aCjmsf8yAERp_RBnUaiRQbrNs8TW6WkbcRD1xkSqNFeBr1YtEyVUpopbOEYFgRKp2GnnvJWWWk7_DX4j4UZWUIekoExCPN7LW56k4KbI69kNHHqUiU8AE98nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYqJzTiJWslQNgAZoJmQFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN3MtYXV0b21vdGl2ZS1zaW5nbGUtcG9ydC11c2ItYy1wZC1wbHVzLWRjLWRjLWNvbnRyb2xsZXKxCUjoaAsX2ACRgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMInO3UiJWslQMVnkfCBR3YKSm9iA4J2BMKiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAr5QGAEiAQDQGAHCGQIIAQ&gclid=EAIaIQobChMIyuTUiJWslQMVnkfCBR3YKSm9EAEYASAAEgIecvD_BwE&num=1&cid=CAQShgIAEQoqgSK4-an8lPWXklMi881xD_6KIy_8OgH190_xKheNJ6flqo21SIx7scoXRTMCuaC7XRBPmVFJXj3teHM0rvstMv6-OekFpuVg11dsiy-HlFWmsWyxPpCO5sc6pXAnNinTm9BzPoEnUDP8DpmZtuHntB3BxwKDGjCM3splatSsk8UkbuDuMoLcblAJYRYuvnJh0KihuPrYthUDWgNMSziYDaShSveCrNeD2_wX-72N2FEs1Hd6AIIca6E-s8lSNo_AAs1f7LhEesJTJFPyYDrVmrVvZjYhM7xURcArG4aFKzTJMC0wRRJF6hL3BYxp9UKwTQ11Mabch896b_oqH0ySSCVeGAE&sig=AOD64_3Gk2hkXq5aOEsHLp_p5Bc9cXVxjw&client=ca-pub-4136602577438768&rf=1&nb=1&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456567%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837872%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837872%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7s-automotive-single-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44950002%26aid%3Dai4495%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic "Infineon" [ref=f5e10]:
              - link "Most programmable USB-C PD" [ref=f5e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CEJAdsD5CasrMMJ6Pid4P2NOk6QufjIr8hgG56sXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE_gFP0NgEuAj9s7eBLOpgcs1jB_TmjPm8bWw2lbfyCnA6mONomj673k05TrvsdElBo9QMs19JBqHD_E3lEUHpT_7CtiMBlKjmN41vuagCDo8zCSxoLN6fac_Fss4w00kOV8u6vLn9FLAeHREzwKlLpoKDNExC1d6L24IUH-4K167pppppy7rxWdOZ8NCXrvoaPOXaKd5UdfIC5g_UfG52DhWTzLWx8XKpRr6aCjmsf8yAERp_RBnUaiRQbrNs8TW6WkbcRD1xkSqNFeBr1YtEyVUpopbOEYFgRKp2GnnvJWWWk7_DX4j4UZWUIekoExCPN7LW56k4KbI69kNHHqUiU8AE98nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYqJzTiJWslQNgAZoJmQFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN3MtYXV0b21vdGl2ZS1zaW5nbGUtcG9ydC11c2ItYy1wZC1wbHVzLWRjLWRjLWNvbnRyb2xsZXKxCUjoaAsX2ACRgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMInO3UiJWslQMVnkfCBR3YKSm9iA4J2BMKiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAr5QGAEiAQDQGAHCGQIIAQ&gclid=EAIaIQobChMIyuTUiJWslQMVnkfCBR3YKSm9EAEYASAAEgIecvD_BwE&num=1&cid=CAQShgIAEQoqgSK4-an8lPWXklMi881xD_6KIy_8OgH190_xKheNJ6flqo21SIx7scoXRTMCuaC7XRBPmVFJXj3teHM0rvstMv6-OekFpuVg11dsiy-HlFWmsWyxPpCO5sc6pXAnNinTm9BzPoEnUDP8DpmZtuHntB3BxwKDGjCM3splatSsk8UkbuDuMoLcblAJYRYuvnJh0KihuPrYthUDWgNMSziYDaShSveCrNeD2_wX-72N2FEs1Hd6AIIca6E-s8lSNo_AAs1f7LhEesJTJFPyYDrVmrVvZjYhM7xURcArG4aFKzTJMC0wRRJF6hL3BYxp9UKwTQ11Mabch896b_oqH0ySSCVeGAE&sig=AOD64_3Gk2hkXq5aOEsHLp_p5Bc9cXVxjw&client=ca-pub-4136602577438768&rf=1&nb=0&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456567%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837872%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837872%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7s-automotive-single-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44950002%26aid%3Dai4495%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic "Infineon" [ref=f5e12]:
              - link "Shorten your time to market and add value-adding features with the included automotive SDK" [ref=f5e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CEJAdsD5CasrMMJ6Pid4P2NOk6QufjIr8hgG56sXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE_gFP0NgEuAj9s7eBLOpgcs1jB_TmjPm8bWw2lbfyCnA6mONomj673k05TrvsdElBo9QMs19JBqHD_E3lEUHpT_7CtiMBlKjmN41vuagCDo8zCSxoLN6fac_Fss4w00kOV8u6vLn9FLAeHREzwKlLpoKDNExC1d6L24IUH-4K167pppppy7rxWdOZ8NCXrvoaPOXaKd5UdfIC5g_UfG52DhWTzLWx8XKpRr6aCjmsf8yAERp_RBnUaiRQbrNs8TW6WkbcRD1xkSqNFeBr1YtEyVUpopbOEYFgRKp2GnnvJWWWk7_DX4j4UZWUIekoExCPN7LW56k4KbI69kNHHqUiU8AE98nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYqJzTiJWslQNgAZoJmQFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN3MtYXV0b21vdGl2ZS1zaW5nbGUtcG9ydC11c2ItYy1wZC1wbHVzLWRjLWRjLWNvbnRyb2xsZXKxCUjoaAsX2ACRgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMInO3UiJWslQMVnkfCBR3YKSm9iA4J2BMKiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAr5QGAEiAQDQGAHCGQIIAQ&gclid=EAIaIQobChMIyuTUiJWslQMVnkfCBR3YKSm9EAEYASAAEgIecvD_BwE&num=1&cid=CAQShgIAEQoqgSK4-an8lPWXklMi881xD_6KIy_8OgH190_xKheNJ6flqo21SIx7scoXRTMCuaC7XRBPmVFJXj3teHM0rvstMv6-OekFpuVg11dsiy-HlFWmsWyxPpCO5sc6pXAnNinTm9BzPoEnUDP8DpmZtuHntB3BxwKDGjCM3splatSsk8UkbuDuMoLcblAJYRYuvnJh0KihuPrYthUDWgNMSziYDaShSveCrNeD2_wX-72N2FEs1Hd6AIIca6E-s8lSNo_AAs1f7LhEesJTJFPyYDrVmrVvZjYhM7xURcArG4aFKzTJMC0wRRJF6hL3BYxp9UKwTQ11Mabch896b_oqH0ySSCVeGAE&sig=AOD64_3Gk2hkXq5aOEsHLp_p5Bc9cXVxjw&client=ca-pub-4136602577438768&rf=1&nb=7&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456567%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837872%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837872%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7s-automotive-single-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44950002%26aid%3Dai4495%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
                - text: Shorten your time to market and add value-adding
                - text: features with the included automotive SDK
          - link "Learn More" [ref=f5e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CEJAdsD5CasrMMJ6Pid4P2NOk6QufjIr8hgG56sXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE_gFP0NgEuAj9s7eBLOpgcs1jB_TmjPm8bWw2lbfyCnA6mONomj673k05TrvsdElBo9QMs19JBqHD_E3lEUHpT_7CtiMBlKjmN41vuagCDo8zCSxoLN6fac_Fss4w00kOV8u6vLn9FLAeHREzwKlLpoKDNExC1d6L24IUH-4K167pppppy7rxWdOZ8NCXrvoaPOXaKd5UdfIC5g_UfG52DhWTzLWx8XKpRr6aCjmsf8yAERp_RBnUaiRQbrNs8TW6WkbcRD1xkSqNFeBr1YtEyVUpopbOEYFgRKp2GnnvJWWWk7_DX4j4UZWUIekoExCPN7LW56k4KbI69kNHHqUiU8AE98nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYqJzTiJWslQNgAZoJmQFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN3MtYXV0b21vdGl2ZS1zaW5nbGUtcG9ydC11c2ItYy1wZC1wbHVzLWRjLWRjLWNvbnRyb2xsZXKxCUjoaAsX2ACRgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMInO3UiJWslQMVnkfCBR3YKSm9iA4J2BMKiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAr5QGAEiAQDQGAHCGQIIAQ&gclid=EAIaIQobChMIyuTUiJWslQMVnkfCBR3YKSm9EAEYASAAEgIecvD_BwE&num=1&cid=CAQShgIAEQoqgSK4-an8lPWXklMi881xD_6KIy_8OgH190_xKheNJ6flqo21SIx7scoXRTMCuaC7XRBPmVFJXj3teHM0rvstMv6-OekFpuVg11dsiy-HlFWmsWyxPpCO5sc6pXAnNinTm9BzPoEnUDP8DpmZtuHntB3BxwKDGjCM3splatSsk8UkbuDuMoLcblAJYRYuvnJh0KihuPrYthUDWgNMSziYDaShSveCrNeD2_wX-72N2FEs1Hd6AIIca6E-s8lSNo_AAs1f7LhEesJTJFPyYDrVmrVvZjYhM7xURcArG4aFKzTJMC0wRRJF6hL3BYxp9UKwTQ11Mabch896b_oqH0ySSCVeGAE&sig=AOD64_3Gk2hkXq5aOEsHLp_p5Bc9cXVxjw&client=ca-pub-4136602577438768&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456567%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837872%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837872%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7s-automotive-single-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44950002%26aid%3Dai4495%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic [ref=f5e18]: Learn More
            - img [ref=f5e19]
        - img [ref=f5e24] [cursor=pointer]
        - button [ref=f5e26] [cursor=pointer]:
          - img [ref=f5e27]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | 
  4  | test('Mouse Action', async ({ page }) => {
  5  |     await page.goto("https://www.testautomationstudio.com/demo/actions/#");
> 6  |     expect(page.title).toBe("Test Automation Studio Demo Website : Mouse & Keyboard Actions");
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  7  |     await page.locator('//input[@value="Single Click Button"]').click({ button: "left" })
  8  |     const a1 = page.locator('#action1Status').textContent();
  9  |     await expect(a1).toBe("Action 1 Click");
  10 | 
  11 |     await page.locator('//input[@value="Double Click Button"]').dblclick();
  12 |     const a2 = page.locator('#action1AStatus').textContent();
  13 |     await expect(a2).toBe("Action 1 Double Click");
  14 | 
  15 |     await page.locator('#action3').click({ button: "right" });
  16 |     const a3 = page.locator('#action3Status').textContent();
  17 |     await expect(a3).toBe("Context Click on Textbox");
  18 | 
  19 | 
  20 | })
```