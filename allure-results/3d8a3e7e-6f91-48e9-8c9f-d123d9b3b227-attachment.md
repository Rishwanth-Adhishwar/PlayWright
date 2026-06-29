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
            - generic "Brevo" [ref=f5e8]:
              - link "Brevo" [ref=f5e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0FfcAz9CatyxL-iJid4PnJnBiAiok4eNhwHp9o6jyhXAjbcBEAEglKylGmDlmuiD2A6gAZigvr1DyAEBqQIvwi9Kx8RGPqgDAcgDwwSqBI0CT9ATL-3zu-v6XugnPW5m5AaBveFZ7cl5tMBBv9xtCNLQKJ4ATjMPCG6NkwutpTD62EEQqS_SSkb-8cimc2M6v2NNUwcysSsn4JTSr43I09MXCm51yf3fGHzW1nPlyUcfHDzv734mP-VX8YdVV4nvtqUsRJ_ns7_FM_KVlaWAHlt-nqGs7A24Sya8QUNYsoDUl-gb0AlntJQqimPRRi_VW5M_LbCkKUSTrwAM8TJSzmZBfUitzjAFhN05F5DlGDcuBriA2pw0K-x1OIHgeIqL6V_BAfsTa_oPoA2Fzj4BqgV1mwmb-zUhBm_AX2iYd10pdS8Tnnh4pKwyKq0l_ujqF7LaipHirNjvsejCK-bABKWztq_cBYgF6L2F71igBmaAB5jYjp0eqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlifg5ywlayVA2ABsQmGDCu_fgtM14AKAYoKhgFodHRwczovL3ByZWNpc2UuZ290cmFja2llci5jb20vY2xpY2s_Y2FtcGFpZ25faWQ9MTcxOSZwdWJfaWQ9NCZmb3JjZV90cmFuc3BhcmVudD10cnVlJnVybD1odHRwcyUzQSUyRiUyRmdldC5icmV2by5jb20lMkZTYWtzMDEme2xwdXJsfZgLAcgLAeALAaIMDCoKCgiO37ECleKxAqoNAklOyA0B6g0TCNPDnbCVrJUDFehEwgUdnEwQgfANAogOCdgTAogUAtAVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgVCgrfiOeC-P____8BEgK4UBhmIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE&num=1&cid=CAQShwIAEQoqgTOWBdY_AZjfOcc8wSl7XmPXNex2Zg51YDc76d90gpZxrKO47DiKcfQIAWTYR1zgieitaKlQ2LGSa-rHQzFEVgsAoj7mw-mlhHr68x7nV1i8VG0HLogtAJJneyxIi10wHe9OwqNSjmaAaK6qttcN6FVu1Nqo7AktrMZthNg5Hm14tw1k82eo41Q_GoT2diRouejlIwXex6mZMfxVXEpYmOxGIzyY2xISW5yCtLjnxWbeSfVs3YbGBkYYfHYL2GvOuVeblGamqPIlTpFEuQbF2VSqkd9UetTVL1eUeiCxO0YVP_BJgP4rgQtBisIamhQQXSeL0g2DoJShSdBOa68n9vRfDBgB&sig=AOD64_3dAPbzVbOz9O3rzinfgWZSyWa9Tw&client=ca-pub-4136602577438768&rf=1&nb=1&adurl=https://www.brevo.com/%3Fgad_source%3D5%26gad_campaignid%3D23855193832%26gclid%3DEAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE
            - generic "Brevo" [ref=f5e10]:
              - link "Unlock Email's True Potential" [ref=f5e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0FfcAz9CatyxL-iJid4PnJnBiAiok4eNhwHp9o6jyhXAjbcBEAEglKylGmDlmuiD2A6gAZigvr1DyAEBqQIvwi9Kx8RGPqgDAcgDwwSqBI0CT9ATL-3zu-v6XugnPW5m5AaBveFZ7cl5tMBBv9xtCNLQKJ4ATjMPCG6NkwutpTD62EEQqS_SSkb-8cimc2M6v2NNUwcysSsn4JTSr43I09MXCm51yf3fGHzW1nPlyUcfHDzv734mP-VX8YdVV4nvtqUsRJ_ns7_FM_KVlaWAHlt-nqGs7A24Sya8QUNYsoDUl-gb0AlntJQqimPRRi_VW5M_LbCkKUSTrwAM8TJSzmZBfUitzjAFhN05F5DlGDcuBriA2pw0K-x1OIHgeIqL6V_BAfsTa_oPoA2Fzj4BqgV1mwmb-zUhBm_AX2iYd10pdS8Tnnh4pKwyKq0l_ujqF7LaipHirNjvsejCK-bABKWztq_cBYgF6L2F71igBmaAB5jYjp0eqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlifg5ywlayVA2ABsQmGDCu_fgtM14AKAYoKhgFodHRwczovL3ByZWNpc2UuZ290cmFja2llci5jb20vY2xpY2s_Y2FtcGFpZ25faWQ9MTcxOSZwdWJfaWQ9NCZmb3JjZV90cmFuc3BhcmVudD10cnVlJnVybD1odHRwcyUzQSUyRiUyRmdldC5icmV2by5jb20lMkZTYWtzMDEme2xwdXJsfZgLAcgLAeALAaIMDCoKCgiO37ECleKxAqoNAklOyA0B6g0TCNPDnbCVrJUDFehEwgUdnEwQgfANAogOCdgTAogUAtAVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgVCgrfiOeC-P____8BEgK4UBhmIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE&num=1&cid=CAQShwIAEQoqgTOWBdY_AZjfOcc8wSl7XmPXNex2Zg51YDc76d90gpZxrKO47DiKcfQIAWTYR1zgieitaKlQ2LGSa-rHQzFEVgsAoj7mw-mlhHr68x7nV1i8VG0HLogtAJJneyxIi10wHe9OwqNSjmaAaK6qttcN6FVu1Nqo7AktrMZthNg5Hm14tw1k82eo41Q_GoT2diRouejlIwXex6mZMfxVXEpYmOxGIzyY2xISW5yCtLjnxWbeSfVs3YbGBkYYfHYL2GvOuVeblGamqPIlTpFEuQbF2VSqkd9UetTVL1eUeiCxO0YVP_BJgP4rgQtBisIamhQQXSeL0g2DoJShSdBOa68n9vRfDBgB&sig=AOD64_3dAPbzVbOz9O3rzinfgWZSyWa9Tw&client=ca-pub-4136602577438768&rf=1&nb=0&adurl=https://www.brevo.com/%3Fgad_source%3D5%26gad_campaignid%3D23855193832%26gclid%3DEAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE
            - generic "Brevo" [ref=f5e12]:
              - 'link "Brevo: Your Marketing Solution" [ref=f5e13] [cursor=pointer]':
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0FfcAz9CatyxL-iJid4PnJnBiAiok4eNhwHp9o6jyhXAjbcBEAEglKylGmDlmuiD2A6gAZigvr1DyAEBqQIvwi9Kx8RGPqgDAcgDwwSqBI0CT9ATL-3zu-v6XugnPW5m5AaBveFZ7cl5tMBBv9xtCNLQKJ4ATjMPCG6NkwutpTD62EEQqS_SSkb-8cimc2M6v2NNUwcysSsn4JTSr43I09MXCm51yf3fGHzW1nPlyUcfHDzv734mP-VX8YdVV4nvtqUsRJ_ns7_FM_KVlaWAHlt-nqGs7A24Sya8QUNYsoDUl-gb0AlntJQqimPRRi_VW5M_LbCkKUSTrwAM8TJSzmZBfUitzjAFhN05F5DlGDcuBriA2pw0K-x1OIHgeIqL6V_BAfsTa_oPoA2Fzj4BqgV1mwmb-zUhBm_AX2iYd10pdS8Tnnh4pKwyKq0l_ujqF7LaipHirNjvsejCK-bABKWztq_cBYgF6L2F71igBmaAB5jYjp0eqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlifg5ywlayVA2ABsQmGDCu_fgtM14AKAYoKhgFodHRwczovL3ByZWNpc2UuZ290cmFja2llci5jb20vY2xpY2s_Y2FtcGFpZ25faWQ9MTcxOSZwdWJfaWQ9NCZmb3JjZV90cmFuc3BhcmVudD10cnVlJnVybD1odHRwcyUzQSUyRiUyRmdldC5icmV2by5jb20lMkZTYWtzMDEme2xwdXJsfZgLAcgLAeALAaIMDCoKCgiO37ECleKxAqoNAklOyA0B6g0TCNPDnbCVrJUDFehEwgUdnEwQgfANAogOCdgTAogUAtAVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgVCgrfiOeC-P____8BEgK4UBhmIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE&num=1&cid=CAQShwIAEQoqgTOWBdY_AZjfOcc8wSl7XmPXNex2Zg51YDc76d90gpZxrKO47DiKcfQIAWTYR1zgieitaKlQ2LGSa-rHQzFEVgsAoj7mw-mlhHr68x7nV1i8VG0HLogtAJJneyxIi10wHe9OwqNSjmaAaK6qttcN6FVu1Nqo7AktrMZthNg5Hm14tw1k82eo41Q_GoT2diRouejlIwXex6mZMfxVXEpYmOxGIzyY2xISW5yCtLjnxWbeSfVs3YbGBkYYfHYL2GvOuVeblGamqPIlTpFEuQbF2VSqkd9UetTVL1eUeiCxO0YVP_BJgP4rgQtBisIamhQQXSeL0g2DoJShSdBOa68n9vRfDBgB&sig=AOD64_3dAPbzVbOz9O3rzinfgWZSyWa9Tw&client=ca-pub-4136602577438768&rf=1&nb=0&adurl=https://www.brevo.com/%3Fgad_source%3D5%26gad_campaignid%3D23855193832%26gclid%3DEAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE
            - generic "Brevo" [ref=f5e14]:
              - link "Brevo is an all-in-one customer engagement platform that helps businesses grow." [ref=f5e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0FfcAz9CatyxL-iJid4PnJnBiAiok4eNhwHp9o6jyhXAjbcBEAEglKylGmDlmuiD2A6gAZigvr1DyAEBqQIvwi9Kx8RGPqgDAcgDwwSqBI0CT9ATL-3zu-v6XugnPW5m5AaBveFZ7cl5tMBBv9xtCNLQKJ4ATjMPCG6NkwutpTD62EEQqS_SSkb-8cimc2M6v2NNUwcysSsn4JTSr43I09MXCm51yf3fGHzW1nPlyUcfHDzv734mP-VX8YdVV4nvtqUsRJ_ns7_FM_KVlaWAHlt-nqGs7A24Sya8QUNYsoDUl-gb0AlntJQqimPRRi_VW5M_LbCkKUSTrwAM8TJSzmZBfUitzjAFhN05F5DlGDcuBriA2pw0K-x1OIHgeIqL6V_BAfsTa_oPoA2Fzj4BqgV1mwmb-zUhBm_AX2iYd10pdS8Tnnh4pKwyKq0l_ujqF7LaipHirNjvsejCK-bABKWztq_cBYgF6L2F71igBmaAB5jYjp0eqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlifg5ywlayVA2ABsQmGDCu_fgtM14AKAYoKhgFodHRwczovL3ByZWNpc2UuZ290cmFja2llci5jb20vY2xpY2s_Y2FtcGFpZ25faWQ9MTcxOSZwdWJfaWQ9NCZmb3JjZV90cmFuc3BhcmVudD10cnVlJnVybD1odHRwcyUzQSUyRiUyRmdldC5icmV2by5jb20lMkZTYWtzMDEme2xwdXJsfZgLAcgLAeALAaIMDCoKCgiO37ECleKxAqoNAklOyA0B6g0TCNPDnbCVrJUDFehEwgUdnEwQgfANAogOCdgTAogUAtAVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgVCgrfiOeC-P____8BEgK4UBhmIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE&num=1&cid=CAQShwIAEQoqgTOWBdY_AZjfOcc8wSl7XmPXNex2Zg51YDc76d90gpZxrKO47DiKcfQIAWTYR1zgieitaKlQ2LGSa-rHQzFEVgsAoj7mw-mlhHr68x7nV1i8VG0HLogtAJJneyxIi10wHe9OwqNSjmaAaK6qttcN6FVu1Nqo7AktrMZthNg5Hm14tw1k82eo41Q_GoT2diRouejlIwXex6mZMfxVXEpYmOxGIzyY2xISW5yCtLjnxWbeSfVs3YbGBkYYfHYL2GvOuVeblGamqPIlTpFEuQbF2VSqkd9UetTVL1eUeiCxO0YVP_BJgP4rgQtBisIamhQQXSeL0g2DoJShSdBOa68n9vRfDBgB&sig=AOD64_3dAPbzVbOz9O3rzinfgWZSyWa9Tw&client=ca-pub-4136602577438768&rf=1&nb=7&adurl=https://www.brevo.com/%3Fgad_source%3D5%26gad_campaignid%3D23855193832%26gclid%3DEAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE
                - text: Brevo is an all-in-one customer engagement platform that helps
                - text: businesses grow.
          - link "OPEN" [ref=f5e19] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0FfcAz9CatyxL-iJid4PnJnBiAiok4eNhwHp9o6jyhXAjbcBEAEglKylGmDlmuiD2A6gAZigvr1DyAEBqQIvwi9Kx8RGPqgDAcgDwwSqBI0CT9ATL-3zu-v6XugnPW5m5AaBveFZ7cl5tMBBv9xtCNLQKJ4ATjMPCG6NkwutpTD62EEQqS_SSkb-8cimc2M6v2NNUwcysSsn4JTSr43I09MXCm51yf3fGHzW1nPlyUcfHDzv734mP-VX8YdVV4nvtqUsRJ_ns7_FM_KVlaWAHlt-nqGs7A24Sya8QUNYsoDUl-gb0AlntJQqimPRRi_VW5M_LbCkKUSTrwAM8TJSzmZBfUitzjAFhN05F5DlGDcuBriA2pw0K-x1OIHgeIqL6V_BAfsTa_oPoA2Fzj4BqgV1mwmb-zUhBm_AX2iYd10pdS8Tnnh4pKwyKq0l_ujqF7LaipHirNjvsejCK-bABKWztq_cBYgF6L2F71igBmaAB5jYjp0eqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlifg5ywlayVA2ABsQmGDCu_fgtM14AKAYoKhgFodHRwczovL3ByZWNpc2UuZ290cmFja2llci5jb20vY2xpY2s_Y2FtcGFpZ25faWQ9MTcxOSZwdWJfaWQ9NCZmb3JjZV90cmFuc3BhcmVudD10cnVlJnVybD1odHRwcyUzQSUyRiUyRmdldC5icmV2by5jb20lMkZTYWtzMDEme2xwdXJsfZgLAcgLAeALAaIMDCoKCgiO37ECleKxAqoNAklOyA0B6g0TCNPDnbCVrJUDFehEwgUdnEwQgfANAogOCdgTAogUAtAVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgVCgrfiOeC-P____8BEgK4UBhmIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE&num=1&cid=CAQShwIAEQoqgTOWBdY_AZjfOcc8wSl7XmPXNex2Zg51YDc76d90gpZxrKO47DiKcfQIAWTYR1zgieitaKlQ2LGSa-rHQzFEVgsAoj7mw-mlhHr68x7nV1i8VG0HLogtAJJneyxIi10wHe9OwqNSjmaAaK6qttcN6FVu1Nqo7AktrMZthNg5Hm14tw1k82eo41Q_GoT2diRouejlIwXex6mZMfxVXEpYmOxGIzyY2xISW5yCtLjnxWbeSfVs3YbGBkYYfHYL2GvOuVeblGamqPIlTpFEuQbF2VSqkd9UetTVL1eUeiCxO0YVP_BJgP4rgQtBisIamhQQXSeL0g2DoJShSdBOa68n9vRfDBgB&sig=AOD64_3dAPbzVbOz9O3rzinfgWZSyWa9Tw&client=ca-pub-4136602577438768&rf=1&nb=8&adurl=https://www.brevo.com/%3Fgad_source%3D5%26gad_campaignid%3D23855193832%26gclid%3DEAIaIQobChMInL-dsJWslQMV6ETCBR2cTBCBEAEYASAAEgJtoPD_BwE
            - generic [ref=f5e20]: OPEN
            - img [ref=f5e21]
        - img [ref=f5e26] [cursor=pointer]
        - button [ref=f5e28] [cursor=pointer]:
          - img [ref=f5e29]
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