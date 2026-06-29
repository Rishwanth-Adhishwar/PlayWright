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

Expected: "Action 1 Click"
Received: Promise {}
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - row "Single Click Single Click Button Action 1 Click" [ref=e55]:
              - cell "Single Click" [ref=e56]
              - cell "Single Click Button" [ref=e57]:
                - button "Single Click Button" [active] [ref=e58]
              - cell "Action 1 Click" [ref=e59]
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
    - generic [ref=e122]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e124]: Discover more
      - link "Programming" [ref=e125] [cursor=pointer]:
        - generic "Programming" [ref=e126]
        - img [ref=e128]
      - link "Computer Keyboards" [ref=e130] [cursor=pointer]:
        - generic "Computer Keyboards" [ref=e131]
        - img [ref=e133]
      - link "Dictionaries & Encyclopedias" [ref=e135] [cursor=pointer]:
        - generic "Dictionaries & Encyclopedias" [ref=e136]
        - img [ref=e138]
  - generic [ref=e141]:
    - generic [ref=e143]:
      - link "Home" [ref=e144] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/
      - generic [ref=e145]: "|"
      - link "Feedback" [ref=e146] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e147]: "|"
      - link "Contact" [ref=e148] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e149]: "|"
      - link "Privacy Policy" [ref=e150] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e151]: "|"
      - link "Site Map" [ref=e152] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/sitemap/
    - generic [ref=e154]: copyright © testautomationstudio.com 2026
  - insertion [ref=e155]:
    - iframe [ref=e158]:
      - generic [active] [ref=f5e1]:
        - generic [ref=f5e6]:
          - generic [ref=f5e7]:
            - generic "Infineon" [ref=f5e8]:
              - link "Infineon" [ref=f5e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwI5xNz9Care_Mp-P4dkP_rqt-AefjIr8hgHJ6MXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE-AFP0B218oHeT9fqheEV8_eAVCx8__qCYeYcB9cmsKdH5Fe-0_Z1P3z60dBsWKgBt3SUJrjtqWXyKY9FBJtrfKjZ75Qq47zpHjcnN9FFAKuiLfml_e06grD5epX1yGzdmbR_LRGFeetG7FkjPfqGCk_HWPUPnJ_KMkHKquuuGPID8tGZHiuYSxsBLs9K9kySn7j-opsqNBuKFidaMAlGhf37xwhN20ryJgFbWNqcHJ5CgB3E0dljXguaDc-pbX8zNDtOgzzKjr1P_3DySd3eCHjhjKEoRNhJN6RI7FoEHGp1gH6JcLuLbuihg4usZqvRYnhdqFbJ7AF0J8AEz8nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY--uEyZWslQNgAZoJlwFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN2QtYXV0b21vdGl2ZS1kdWFsLXBvcnQtdXNiLWMtcGQtcGx1cy1kYy1kYy1jb250cm9sbGVysQm-O5ZJE-8SWIAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCMS-hsmVrJUDFZ9HOAUdfl0Lf4gOCdgTCogUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgK-UBgBIgEA0BgBwhkCCAE&gclid=EAIaIQobChMI97aGyZWslQMVn0c4BR1-XQt_EAEYASAAEgLDpPD_BwE&num=1&cid=CAQShgIAEQoqgWzb3dF4945KDB0HFjBiyCVfTkwaVB23K3seA-_tEE6juCGNXYnfUAlVdDAoILM1OD2T-1Z9eKkhvaAQj9wgVuI56eImsPmnkl3sCuRIe52sD-mtWSOHZMys9LWc-ixqEr7jjwOMncKABkohOdkVnnIfp6BV3f-yang6cW04jGcKODXCmf3GOpUDvvq4CfqlVLeHnRr4u0gEtkND4cVIpW0Q-hrZg_F3Jr9Kw9f680uqSCywf-2NJbEzFLEkIeIrrUbeyzABx-xAkWNj_JVKDfeR_dNjvIdgBkenCpXCPjX94z2pusheBrTiASSiZ36hzSrg61NJpndOgO10U1qbCYwjGAE&sig=AOD64_3k1N5XLTrqGuzv5DPVtAgnRE1HMg&client=ca-pub-4136602577438768&rf=1&nb=1&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456527%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837863%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837863%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7d-automotive-dual-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44930003%26aid%3Dai4493%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic "Infineon" [ref=f5e10]:
              - link "Dualport USB-C DCDC Controller" [ref=f5e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwI5xNz9Care_Mp-P4dkP_rqt-AefjIr8hgHJ6MXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE-AFP0B218oHeT9fqheEV8_eAVCx8__qCYeYcB9cmsKdH5Fe-0_Z1P3z60dBsWKgBt3SUJrjtqWXyKY9FBJtrfKjZ75Qq47zpHjcnN9FFAKuiLfml_e06grD5epX1yGzdmbR_LRGFeetG7FkjPfqGCk_HWPUPnJ_KMkHKquuuGPID8tGZHiuYSxsBLs9K9kySn7j-opsqNBuKFidaMAlGhf37xwhN20ryJgFbWNqcHJ5CgB3E0dljXguaDc-pbX8zNDtOgzzKjr1P_3DySd3eCHjhjKEoRNhJN6RI7FoEHGp1gH6JcLuLbuihg4usZqvRYnhdqFbJ7AF0J8AEz8nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY--uEyZWslQNgAZoJlwFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN2QtYXV0b21vdGl2ZS1kdWFsLXBvcnQtdXNiLWMtcGQtcGx1cy1kYy1kYy1jb250cm9sbGVysQm-O5ZJE-8SWIAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCMS-hsmVrJUDFZ9HOAUdfl0Lf4gOCdgTCogUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgK-UBgBIgEA0BgBwhkCCAE&gclid=EAIaIQobChMI97aGyZWslQMVn0c4BR1-XQt_EAEYASAAEgLDpPD_BwE&num=1&cid=CAQShgIAEQoqgWzb3dF4945KDB0HFjBiyCVfTkwaVB23K3seA-_tEE6juCGNXYnfUAlVdDAoILM1OD2T-1Z9eKkhvaAQj9wgVuI56eImsPmnkl3sCuRIe52sD-mtWSOHZMys9LWc-ixqEr7jjwOMncKABkohOdkVnnIfp6BV3f-yang6cW04jGcKODXCmf3GOpUDvvq4CfqlVLeHnRr4u0gEtkND4cVIpW0Q-hrZg_F3Jr9Kw9f680uqSCywf-2NJbEzFLEkIeIrrUbeyzABx-xAkWNj_JVKDfeR_dNjvIdgBkenCpXCPjX94z2pusheBrTiASSiZ36hzSrg61NJpndOgO10U1qbCYwjGAE&sig=AOD64_3k1N5XLTrqGuzv5DPVtAgnRE1HMg&client=ca-pub-4136602577438768&rf=1&nb=0&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456527%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837863%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837863%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7d-automotive-dual-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44930003%26aid%3Dai4493%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic "Infineon" [ref=f5e12]:
              - link "Shorten your time to market and add value-adding features with the included automotive SDK" [ref=f5e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwI5xNz9Care_Mp-P4dkP_rqt-AefjIr8hgHJ6MXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE-AFP0B218oHeT9fqheEV8_eAVCx8__qCYeYcB9cmsKdH5Fe-0_Z1P3z60dBsWKgBt3SUJrjtqWXyKY9FBJtrfKjZ75Qq47zpHjcnN9FFAKuiLfml_e06grD5epX1yGzdmbR_LRGFeetG7FkjPfqGCk_HWPUPnJ_KMkHKquuuGPID8tGZHiuYSxsBLs9K9kySn7j-opsqNBuKFidaMAlGhf37xwhN20ryJgFbWNqcHJ5CgB3E0dljXguaDc-pbX8zNDtOgzzKjr1P_3DySd3eCHjhjKEoRNhJN6RI7FoEHGp1gH6JcLuLbuihg4usZqvRYnhdqFbJ7AF0J8AEz8nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY--uEyZWslQNgAZoJlwFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN2QtYXV0b21vdGl2ZS1kdWFsLXBvcnQtdXNiLWMtcGQtcGx1cy1kYy1kYy1jb250cm9sbGVysQm-O5ZJE-8SWIAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCMS-hsmVrJUDFZ9HOAUdfl0Lf4gOCdgTCogUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgK-UBgBIgEA0BgBwhkCCAE&gclid=EAIaIQobChMI97aGyZWslQMVn0c4BR1-XQt_EAEYASAAEgLDpPD_BwE&num=1&cid=CAQShgIAEQoqgWzb3dF4945KDB0HFjBiyCVfTkwaVB23K3seA-_tEE6juCGNXYnfUAlVdDAoILM1OD2T-1Z9eKkhvaAQj9wgVuI56eImsPmnkl3sCuRIe52sD-mtWSOHZMys9LWc-ixqEr7jjwOMncKABkohOdkVnnIfp6BV3f-yang6cW04jGcKODXCmf3GOpUDvvq4CfqlVLeHnRr4u0gEtkND4cVIpW0Q-hrZg_F3Jr9Kw9f680uqSCywf-2NJbEzFLEkIeIrrUbeyzABx-xAkWNj_JVKDfeR_dNjvIdgBkenCpXCPjX94z2pusheBrTiASSiZ36hzSrg61NJpndOgO10U1qbCYwjGAE&sig=AOD64_3k1N5XLTrqGuzv5DPVtAgnRE1HMg&client=ca-pub-4136602577438768&rf=1&nb=7&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456527%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837863%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837863%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7d-automotive-dual-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44930003%26aid%3Dai4493%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
                - text: Shorten your time to market and add value-adding
                - text: features with the included automotive SDK
          - link "Learn More" [ref=f5e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwI5xNz9Care_Mp-P4dkP_rqt-AefjIr8hgHJ6MXcxhTFvPXm2kUQASCUrKUaYOWa6IPYDqAB1_-Z0wPIAQGpArTAf-39HbM-qAMByAPLBKoE-AFP0B218oHeT9fqheEV8_eAVCx8__qCYeYcB9cmsKdH5Fe-0_Z1P3z60dBsWKgBt3SUJrjtqWXyKY9FBJtrfKjZ75Qq47zpHjcnN9FFAKuiLfml_e06grD5epX1yGzdmbR_LRGFeetG7FkjPfqGCk_HWPUPnJ_KMkHKquuuGPID8tGZHiuYSxsBLs9K9kySn7j-opsqNBuKFidaMAlGhf37xwhN20ryJgFbWNqcHJ5CgB3E0dljXguaDc-pbX8zNDtOgzzKjr1P_3DySd3eCHjhjKEoRNhJN6RI7FoEHGp1gH6JcLuLbuihg4usZqvRYnhdqFbJ7AF0J8AEz8nDpKwFiAW47YCVVIAH-8-9K6gHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY--uEyZWslQNgAZoJlwFodHRwczovL3d3dy5pbmZpbmVvbi5jb20vcHJvZHVjdHMvdW5pdmVyc2FsLXNlcmlhbC1idXMvdXNiLWMtcG93ZXItZGVsaXZlcnktY29udHJvbGxlcnMvZXotcGQtY2NnN2QtYXV0b21vdGl2ZS1kdWFsLXBvcnQtdXNiLWMtcGQtcGx1cy1kYy1kYy1jb250cm9sbGVysQm-O5ZJE-8SWIAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCMS-hsmVrJUDFZ9HOAUdfl0Lf4gOCdgTCogUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgK-UBgBIgEA0BgBwhkCCAE&gclid=EAIaIQobChMI97aGyZWslQMVn0c4BR1-XQt_EAEYASAAEgLDpPD_BwE&num=1&cid=CAQShgIAEQoqgWzb3dF4945KDB0HFjBiyCVfTkwaVB23K3seA-_tEE6juCGNXYnfUAlVdDAoILM1OD2T-1Z9eKkhvaAQj9wgVuI56eImsPmnkl3sCuRIe52sD-mtWSOHZMys9LWc-ixqEr7jjwOMncKABkohOdkVnnIfp6BV3f-yang6cW04jGcKODXCmf3GOpUDvvq4CfqlVLeHnRr4u0gEtkND4cVIpW0Q-hrZg_F3Jr9Kw9f680uqSCywf-2NJbEzFLEkIeIrrUbeyzABx-xAkWNj_JVKDfeR_dNjvIdgBkenCpXCPjX94z2pusheBrTiASSiZ36hzSrg61NJpndOgO10U1qbCYwjGAE&sig=AOD64_3k1N5XLTrqGuzv5DPVtAgnRE1HMg&client=ca-pub-4136602577438768&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3F%26ds_a_cid%3D93011195%26ds_a_caid%3D22592632504%26ds_a_agid%3D183686456527%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D762976837863%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://monitor.lunio.ai/v3.0/template%3Faccid%3D17696%26kw%3D%26mt%3D%26nw%3Dd%26cpn%3D22592632504%26devi%3Dc%26devm%3D%26locp%3D1007810%26loci%3D%26pl%3Dwww.testautomationstudio.com%26cr%3D762976837863%26adp%3D%26sadt%3D%26url%3Dhttps://www.infineon.com/products/universal-serial-bus/usb-c-power-delivery-controllers/ez-pd-ccg7d-automotive-dual-port-usb-c-pd-plus-dc-dc-controller%3Fuid%3Dci44930003%26aid%3Dai4493%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D22592632504
            - generic [ref=f5e18]: Learn More
            - img [ref=f5e19]
        - img [ref=f5e24] [cursor=pointer]
        - button [ref=f5e26] [cursor=pointer]:
          - img [ref=f5e27]
        - iframe
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | 
  4  | test('Mouse Action', async ({ page }) => {
  5  |     await page.goto("https://www.testautomationstudio.com/demo/actions/#");
  6  |     await page.locator('//input[@value="Single Click Button"]').click({ button: "left" })
  7  |     const a1 = page.locator('#action1Status').textContent();
> 8  |     await expect(a1).toBe("Action 1 Click");
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  9  | 
  10 |     await page.locator('//input[@value="Double Click Button"]').dblclick();
  11 |     const a2 = page.locator('#action1AStatus').textContent();
  12 |     await expect(a2).toBe("Action 1 Double Click");
  13 | 
  14 |     await page.locator('#action3').click({ button: "right" });
  15 |     const a3 = page.locator('#action3Status').textContent();
  16 |     await expect(a3).toBe("Context Click on Textbox");
  17 | 
  18 | 
  19 | })
```