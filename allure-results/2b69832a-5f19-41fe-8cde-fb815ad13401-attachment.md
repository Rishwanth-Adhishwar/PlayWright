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
      - link "Internet & Telecom" [ref=e125] [cursor=pointer]:
        - generic "Internet & Telecom" [ref=e126]
        - img [ref=e128]
      - link "Development Tools" [ref=e130] [cursor=pointer]:
        - generic "Development Tools" [ref=e131]
        - img [ref=e133]
      - link "Software Utilities" [ref=e135] [cursor=pointer]:
        - generic "Software Utilities" [ref=e136]
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
          - link "Emergent" [ref=f5e10] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CLQRsJD9CaoDqFOe6qfkP55uVsAOqw8TuhwG42Z_BoBaLpdSdhyoQASCUrKUaYOWa6IPYDqAB4Nzo-UDIAQGoAwHIA8sEqgSRAk_QLeWEIKiZKk4tHc5IPDVCVuJffcxFIF_a1OuCRTIUilAHbOLbBZLSqRLRsuaK0anRdhdvK4gdAyOiBzvix59Ybjl0mSZWkVz90FaEf_pNO9F73LXzxFTPIqAPnlgxZC_ZOn5BlNn9VyZUjEbF21TPvIgsF2AOS8_exneyxE9rHFtz5vhcKtGdRAqGV0NNpCjoNOpBpdXj1e8orScEXS712oQIRjN_-mEhSLXSQYLF3F6J5A2bSvP8EJZfH22e4Bgf5ymZDcrw7l9cXykO6E262U_QM-sbmuXBC64J6ztCWZhLJJFFM3If80BaCq_2IKDnTA6azJA-0Wc1cKHfNJS5_rqy6FGaafn5BuVwVbKze8AEqcqT99AFiAWCxLnHWIAH4JS52RuoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIjh4L-VrJUDYAGxCbLHaVMy3O4QgAoBmAsByAsBogwlYgIKAGoXChVjb20uZW1lcmdlbnRhZ2VudC5hcHB4AYgBAZABAaoNAklOyA0B6g0TCOiX4b-VrJUDFWddKgkd500FNvANAogOCbAOp8yl_BjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE&num=1&cid=CAQShwIAEQoqgQYZtPmkLzcViEVngJ-sWtq64zh2K6AakW6WuPRgXMnGqkt5OY-QCbl_LTslXYJtIudXXqavKs6UVdQHyl_o6iJJBTvRBT4LphWkkJmyX4hgWOP9I7kKCnN1f0KfRozVtDxIsM8-mKzwIfHLpoW5kEGIva2wc63NTT5ZxWVwI-UkLDP22sRMz-sTfIzlbTJ6HJHzoK7_Z_GmbYXqX2ddLDq3NjOZA5LMQajwdGP8scLrWZOtSrE0tW4rfOWMsHM5PCbrHJaO-lQ66KkSN10WJimo5MzwW92dEX9mvN7Vz0i8QePAoBAYTp1H_EM3EuIdgmlcpEMXMi3yqSMzTDo0e1_GwBgB&sig=AOD64_1mctnaKfhLcjGqm9gmq63Klcp8Kg&client=ca-pub-4136602577438768&rf=1&nb=19&adurl=https://app.emergent.sh/landing%3Futm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23772128384%26utm_adgroup%3D%26utm_term%3D%26matchtype%3D%26device%3Dc%26network%3Dx%26gad_source%3D5%26gad_campaignid%3D23772160514%26gclid%3DEAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE
            - img "Emergent" [ref=f5e11]
          - generic [ref=f5e13]:
            - generic "Emergent" [ref=f5e14]:
              - link "Emergent" [ref=f5e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CLQRsJD9CaoDqFOe6qfkP55uVsAOqw8TuhwG42Z_BoBaLpdSdhyoQASCUrKUaYOWa6IPYDqAB4Nzo-UDIAQGoAwHIA8sEqgSRAk_QLeWEIKiZKk4tHc5IPDVCVuJffcxFIF_a1OuCRTIUilAHbOLbBZLSqRLRsuaK0anRdhdvK4gdAyOiBzvix59Ybjl0mSZWkVz90FaEf_pNO9F73LXzxFTPIqAPnlgxZC_ZOn5BlNn9VyZUjEbF21TPvIgsF2AOS8_exneyxE9rHFtz5vhcKtGdRAqGV0NNpCjoNOpBpdXj1e8orScEXS712oQIRjN_-mEhSLXSQYLF3F6J5A2bSvP8EJZfH22e4Bgf5ymZDcrw7l9cXykO6E262U_QM-sbmuXBC64J6ztCWZhLJJFFM3If80BaCq_2IKDnTA6azJA-0Wc1cKHfNJS5_rqy6FGaafn5BuVwVbKze8AEqcqT99AFiAWCxLnHWIAH4JS52RuoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIjh4L-VrJUDYAGxCbLHaVMy3O4QgAoBmAsByAsBogwlYgIKAGoXChVjb20uZW1lcmdlbnRhZ2VudC5hcHB4AYgBAZABAaoNAklOyA0B6g0TCOiX4b-VrJUDFWddKgkd500FNvANAogOCbAOp8yl_BjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE&num=1&cid=CAQShwIAEQoqgQYZtPmkLzcViEVngJ-sWtq64zh2K6AakW6WuPRgXMnGqkt5OY-QCbl_LTslXYJtIudXXqavKs6UVdQHyl_o6iJJBTvRBT4LphWkkJmyX4hgWOP9I7kKCnN1f0KfRozVtDxIsM8-mKzwIfHLpoW5kEGIva2wc63NTT5ZxWVwI-UkLDP22sRMz-sTfIzlbTJ6HJHzoK7_Z_GmbYXqX2ddLDq3NjOZA5LMQajwdGP8scLrWZOtSrE0tW4rfOWMsHM5PCbrHJaO-lQ66KkSN10WJimo5MzwW92dEX9mvN7Vz0i8QePAoBAYTp1H_EM3EuIdgmlcpEMXMi3yqSMzTDo0e1_GwBgB&sig=AOD64_1mctnaKfhLcjGqm9gmq63Klcp8Kg&client=ca-pub-4136602577438768&rf=1&nb=1&adurl=https://app.emergent.sh/landing%3Futm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23772128384%26utm_adgroup%3D%26utm_term%3D%26matchtype%3D%26device%3Dc%26network%3Dx%26gad_source%3D5%26gad_campaignid%3D23772160514%26gclid%3DEAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE
            - generic "Emergent" [ref=f5e16]:
              - 'link "Emergent: Build it on AI" [ref=f5e17] [cursor=pointer]':
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CLQRsJD9CaoDqFOe6qfkP55uVsAOqw8TuhwG42Z_BoBaLpdSdhyoQASCUrKUaYOWa6IPYDqAB4Nzo-UDIAQGoAwHIA8sEqgSRAk_QLeWEIKiZKk4tHc5IPDVCVuJffcxFIF_a1OuCRTIUilAHbOLbBZLSqRLRsuaK0anRdhdvK4gdAyOiBzvix59Ybjl0mSZWkVz90FaEf_pNO9F73LXzxFTPIqAPnlgxZC_ZOn5BlNn9VyZUjEbF21TPvIgsF2AOS8_exneyxE9rHFtz5vhcKtGdRAqGV0NNpCjoNOpBpdXj1e8orScEXS712oQIRjN_-mEhSLXSQYLF3F6J5A2bSvP8EJZfH22e4Bgf5ymZDcrw7l9cXykO6E262U_QM-sbmuXBC64J6ztCWZhLJJFFM3If80BaCq_2IKDnTA6azJA-0Wc1cKHfNJS5_rqy6FGaafn5BuVwVbKze8AEqcqT99AFiAWCxLnHWIAH4JS52RuoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIjh4L-VrJUDYAGxCbLHaVMy3O4QgAoBmAsByAsBogwlYgIKAGoXChVjb20uZW1lcmdlbnRhZ2VudC5hcHB4AYgBAZABAaoNAklOyA0B6g0TCOiX4b-VrJUDFWddKgkd500FNvANAogOCbAOp8yl_BjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE&num=1&cid=CAQShwIAEQoqgQYZtPmkLzcViEVngJ-sWtq64zh2K6AakW6WuPRgXMnGqkt5OY-QCbl_LTslXYJtIudXXqavKs6UVdQHyl_o6iJJBTvRBT4LphWkkJmyX4hgWOP9I7kKCnN1f0KfRozVtDxIsM8-mKzwIfHLpoW5kEGIva2wc63NTT5ZxWVwI-UkLDP22sRMz-sTfIzlbTJ6HJHzoK7_Z_GmbYXqX2ddLDq3NjOZA5LMQajwdGP8scLrWZOtSrE0tW4rfOWMsHM5PCbrHJaO-lQ66KkSN10WJimo5MzwW92dEX9mvN7Vz0i8QePAoBAYTp1H_EM3EuIdgmlcpEMXMi3yqSMzTDo0e1_GwBgB&sig=AOD64_1mctnaKfhLcjGqm9gmq63Klcp8Kg&client=ca-pub-4136602577438768&rf=1&nb=0&adurl=https://app.emergent.sh/landing%3Futm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23772128384%26utm_adgroup%3D%26utm_term%3D%26matchtype%3D%26device%3Dc%26network%3Dx%26gad_source%3D5%26gad_campaignid%3D23772160514%26gclid%3DEAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE
            - generic "Emergent" [ref=f5e18]:
              - link "Turn your Mobile App ideas into reality—AI & no-code app development made simple." [ref=f5e19] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CLQRsJD9CaoDqFOe6qfkP55uVsAOqw8TuhwG42Z_BoBaLpdSdhyoQASCUrKUaYOWa6IPYDqAB4Nzo-UDIAQGoAwHIA8sEqgSRAk_QLeWEIKiZKk4tHc5IPDVCVuJffcxFIF_a1OuCRTIUilAHbOLbBZLSqRLRsuaK0anRdhdvK4gdAyOiBzvix59Ybjl0mSZWkVz90FaEf_pNO9F73LXzxFTPIqAPnlgxZC_ZOn5BlNn9VyZUjEbF21TPvIgsF2AOS8_exneyxE9rHFtz5vhcKtGdRAqGV0NNpCjoNOpBpdXj1e8orScEXS712oQIRjN_-mEhSLXSQYLF3F6J5A2bSvP8EJZfH22e4Bgf5ymZDcrw7l9cXykO6E262U_QM-sbmuXBC64J6ztCWZhLJJFFM3If80BaCq_2IKDnTA6azJA-0Wc1cKHfNJS5_rqy6FGaafn5BuVwVbKze8AEqcqT99AFiAWCxLnHWIAH4JS52RuoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIjh4L-VrJUDYAGxCbLHaVMy3O4QgAoBmAsByAsBogwlYgIKAGoXChVjb20uZW1lcmdlbnRhZ2VudC5hcHB4AYgBAZABAaoNAklOyA0B6g0TCOiX4b-VrJUDFWddKgkd500FNvANAogOCbAOp8yl_BjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE&num=1&cid=CAQShwIAEQoqgQYZtPmkLzcViEVngJ-sWtq64zh2K6AakW6WuPRgXMnGqkt5OY-QCbl_LTslXYJtIudXXqavKs6UVdQHyl_o6iJJBTvRBT4LphWkkJmyX4hgWOP9I7kKCnN1f0KfRozVtDxIsM8-mKzwIfHLpoW5kEGIva2wc63NTT5ZxWVwI-UkLDP22sRMz-sTfIzlbTJ6HJHzoK7_Z_GmbYXqX2ddLDq3NjOZA5LMQajwdGP8scLrWZOtSrE0tW4rfOWMsHM5PCbrHJaO-lQ66KkSN10WJimo5MzwW92dEX9mvN7Vz0i8QePAoBAYTp1H_EM3EuIdgmlcpEMXMi3yqSMzTDo0e1_GwBgB&sig=AOD64_1mctnaKfhLcjGqm9gmq63Klcp8Kg&client=ca-pub-4136602577438768&rf=1&nb=7&adurl=https://app.emergent.sh/landing%3Futm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23772128384%26utm_adgroup%3D%26utm_term%3D%26matchtype%3D%26device%3Dc%26network%3Dx%26gad_source%3D5%26gad_campaignid%3D23772160514%26gclid%3DEAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE
                - text: Turn your Mobile App ideas into reality—AI &
                - text: no-code app development made simple.
          - link "Open" [ref=f5e23] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CLQRsJD9CaoDqFOe6qfkP55uVsAOqw8TuhwG42Z_BoBaLpdSdhyoQASCUrKUaYOWa6IPYDqAB4Nzo-UDIAQGoAwHIA8sEqgSRAk_QLeWEIKiZKk4tHc5IPDVCVuJffcxFIF_a1OuCRTIUilAHbOLbBZLSqRLRsuaK0anRdhdvK4gdAyOiBzvix59Ybjl0mSZWkVz90FaEf_pNO9F73LXzxFTPIqAPnlgxZC_ZOn5BlNn9VyZUjEbF21TPvIgsF2AOS8_exneyxE9rHFtz5vhcKtGdRAqGV0NNpCjoNOpBpdXj1e8orScEXS712oQIRjN_-mEhSLXSQYLF3F6J5A2bSvP8EJZfH22e4Bgf5ymZDcrw7l9cXykO6E262U_QM-sbmuXBC64J6ztCWZhLJJFFM3If80BaCq_2IKDnTA6azJA-0Wc1cKHfNJS5_rqy6FGaafn5BuVwVbKze8AEqcqT99AFiAWCxLnHWIAH4JS52RuoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIjh4L-VrJUDYAGxCbLHaVMy3O4QgAoBmAsByAsBogwlYgIKAGoXChVjb20uZW1lcmdlbnRhZ2VudC5hcHB4AYgBAZABAaoNAklOyA0B6g0TCOiX4b-VrJUDFWddKgkd500FNvANAogOCbAOp8yl_BjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE&num=1&cid=CAQShwIAEQoqgQYZtPmkLzcViEVngJ-sWtq64zh2K6AakW6WuPRgXMnGqkt5OY-QCbl_LTslXYJtIudXXqavKs6UVdQHyl_o6iJJBTvRBT4LphWkkJmyX4hgWOP9I7kKCnN1f0KfRozVtDxIsM8-mKzwIfHLpoW5kEGIva2wc63NTT5ZxWVwI-UkLDP22sRMz-sTfIzlbTJ6HJHzoK7_Z_GmbYXqX2ddLDq3NjOZA5LMQajwdGP8scLrWZOtSrE0tW4rfOWMsHM5PCbrHJaO-lQ66KkSN10WJimo5MzwW92dEX9mvN7Vz0i8QePAoBAYTp1H_EM3EuIdgmlcpEMXMi3yqSMzTDo0e1_GwBgB&sig=AOD64_1mctnaKfhLcjGqm9gmq63Klcp8Kg&client=ca-pub-4136602577438768&rf=1&nb=8&adurl=https://app.emergent.sh/landing%3Futm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23772128384%26utm_adgroup%3D%26utm_term%3D%26matchtype%3D%26device%3Dc%26network%3Dx%26gad_source%3D5%26gad_campaignid%3D23772160514%26gclid%3DEAIaIQobChMIgIzhv5WslQMVZ10qCR3nTQU2EAEYASAAEgJ2qPD_BwE
            - generic [ref=f5e24]: Open
            - img [ref=f5e25]
        - img [ref=f5e30] [cursor=pointer]
        - button [ref=f5e32] [cursor=pointer]:
          - img [ref=f5e33]
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