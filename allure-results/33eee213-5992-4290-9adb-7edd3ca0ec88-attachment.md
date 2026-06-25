# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase6.test.ts >> Testcase 6 - Contact Us Form
- Location: tests\automation_exercise\TestCase6.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=e47]
        - generic [ref=e48]: Success! Your details have been submitted successfully.
        - link " Home" [ref=e50] [cursor=pointer]:
          - /url: /
          - generic [ref=e51]:
            - generic [ref=e52]: 
            - text: Home
      - generic [ref=e54]:
        - heading "Feedback For Us" [level=2] [ref=e55]
        - generic [ref=e56]:
          - paragraph [ref=e57]: We really appreciate your response to our website.
          - paragraph [ref=e58]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e59] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e60]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e61]: Thank you
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e62]:
    - generic [ref=e67]:
      - heading "Subscription" [level=2] [ref=e68]
      - generic [ref=e69]:
        - textbox "Your email address" [ref=e70]
        - button "" [ref=e71] [cursor=pointer]:
          - generic [ref=e72]: 
        - paragraph [ref=e73]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e77]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e78]:
    - iframe [ref=e81]:
      - iframe [ref=f17e1]:
        - generic [active]:
          - generic [ref=f18e1]:
            - generic [ref=f18e2]:
              - generic:
                - img [ref=f18e6] [cursor=pointer]
                - button [ref=f18e8] [cursor=pointer]:
                  - img [ref=f18e9]
            - insertion [ref=f18e16]:
              - generic [ref=f18e17]:
                - iframe [ref=f18e18]:
                  - generic [active] [ref=f23e1]:
                    - link:
                      - /url: javascript:void(0);
                    - generic [ref=f23e2] [cursor=pointer]:
                      - link:
                        - /url: javascript:void(0);
                - link "AdChoices arrow" [ref=f18e20] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f18e21]
                - link "Privacy Notification" [ref=f18e23] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e24]
                - link "Privacy Notification" [ref=f18e26] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e27]
          - iframe
```