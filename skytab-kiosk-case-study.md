# Shift4 Kiosk: Streamlining Restaurant Self-Service Ordering

> Designing an intuitive self-ordering kiosk that reduced order time by 30% and increased kiosk adoption by 20%

---

## Overview

**Role:** Senior Product Designer
**Company:** Shift4
**Timeline:** 2024
**Platform:** Kiosk (Advantech UTK-615 Touchscreen)

### Impact At-a-Glance

- ⚡ **30% faster** average order completion time
- 📈 **20% increase** in kiosk usage due to flexible payment options
- 🎫 **15% reduction** in support tickets related to kiosk issues
- ✅ **MVP delivered** on schedule for quick go-to-market

---

## Problem

### The Business Challenge

Restaurants using SkyTab POS lacked a modern self-ordering solution, forcing customers to wait in long lines and rely on staff-entered orders. This created operational bottlenecks, order accuracy issues, and limited payment flexibility—directly impacting customer satisfaction and restaurant efficiency.

**Three critical pain points emerged:**

#### ⏳ Efficiency
**Long lines and wait times** that negatively impacted customer satisfaction and table turnover rates. Peak hours created significant bottlenecks, frustrating both customers and staff.

#### ⚠️ Accuracy
**Order errors due to manual input by staff**, leading to inefficiency, delays, and increased food waste. Miscommunication between customers and staff resulted in incorrect orders and remakes.

#### 💳 Flexibility
**Lack of flexibility in payment methods**, limiting customer convenience and creating friction at the point of sale. Customers expected modern payment options but were constrained by traditional POS limitations.

### The Opportunity

By creating an integrated self-ordering kiosk solution that connects seamlessly with SkyTab POS, we could:
- Empower customers to control their ordering experience
- Reduce wait times and improve throughput during peak hours
- Eliminate order errors caused by miscommunication
- Provide flexible payment options (register or kiosk payment)
- Free up staff to focus on food preparation and customer service

---

## Research & Discovery

### Understanding the Problem Space

**Stakeholder Interviews & Merchant Feedback**

I gathered insights from restaurant operators and end users to understand pain points with existing kiosk solutions. Key findings:
- Merchants wanted **faster throughput** during lunch and dinner rushes
- Customers felt **overwhelmed** by complicated multi-screen ordering flows
- Staff struggled with **kiosk maintenance** and troubleshooting when customers got stuck
- Loyalty program integration was **critical** for repeat customers

**Competitive Analysis**

Reviewed industry standards and competitors (DoorDash, Uber Eats, McDonald's kiosks) to evaluate common practices:
- **Best practices:** Large touch targets, visual menu categories, clear cart summaries
- **Pain points:** Too many steps, unclear navigation, poor error handling
- **Opportunity:** SkyTab could offer a **streamlined experience** with fewer screens and clearer visual hierarchy

**Hardware Constraints & Opportunities**

Collaborated with the hardware team to understand the Advantech UTK-615 kiosk specifications:
- **Screen size & resolution:** Optimize layouts for 15" touchscreen at specific resolution
- **Touch responsiveness:** Ensure buttons were large enough for accurate taps
- **Physical placement:** Design for standing users at counter height
- **Accessibility:** Consider reach zones and readability from various heights

### Key Insights

1. **Speed is paramount:** Every additional tap or screen adds friction. Customers want to order quickly and get back to their day.

2. **Visual first:** High-quality food photography drives decisions more than text descriptions. Show, don't just tell.

3. **Error recovery matters:** When customers make mistakes (wrong item, wrong modifier), they should be able to fix it easily without starting over.

4. **Loyalty integration is expected:** Regular customers expect their loyalty rewards to be seamlessly integrated, not an afterthought.

5. **Payment flexibility drives adoption:** Offering both "pay at kiosk" and "pay at counter" options accommodates different customer preferences and comfort levels.

---

## Design Strategy

### Guiding Principles

**1. Minimal Screens, Maximum Clarity**
Every screen should have a single, clear purpose. Reduce cognitive load by presenting only essential information and actions at each step.

**2. Touch-First Design**
Optimize all interactions for touch: large tap targets (minimum 44×44pt), clear visual feedback, and forgiving hit areas. No hover states or small buttons.

**3. Visual Hierarchy Drives Speed**
Use size, color, and imagery strategically to guide users through the flow. The most important action should be the most visually prominent.

**4. Fail Gracefully**
Anticipate errors (payment declined, item unavailable, system timeout) and provide clear, actionable guidance for recovery.

### Strategic Decisions

#### Streamlined User Flow

Designed a linear flow with strategic decision points:
1. **Loyalty check** (if applicable) → personalized welcome
2. **Dine-in or To-Go** → sets fulfillment expectations
3. **Menu browsing** → category navigation with visual cards
4. **Item customization** → modifiers presented clearly
5. **Cart review** → opportunity to edit before checkout
6. **Customer info** (name/phone) → for order tracking
7. **Payment choice** → kiosk or counter payment
8. **Confirmation** → order submitted successfully

This flow reduced the average number of screens from 12+ (competitor average) to 8-10 screens depending on customization needs.

#### Feature Prioritization for MVP

**Must-Have (MVP):**
- Welcome screen with loyalty detection
- Category-based menu navigation
- Item cards with photos, descriptions, and prices
- Modifier selection for customization
- Cart view with editing capability
- Customer information capture
- Dual payment options (kiosk or counter)
- Order confirmation and receipt

**Phase 2 (Post-Launch):**
- Upsell recommendations
- Nutritional information
- Advanced dietary filters
- Multilingual support
- Accessibility enhancements

#### Design System Approach

Rather than starting from scratch, I extended the existing SkyTab design system to the kiosk context:
- **Adapted spacing** for touch targets (increased from web/mobile standards)
- **Created kiosk-specific components** optimized for 15" landscape orientation
- **Established interaction patterns** specific to standing, touchscreen use
- **Defined animation** and feedback for touch interactions

---

## Design Process

### Phase 1: User Flow Mapping

Mapped out the key user journeys, ensuring a straightforward and intuitive process from welcome to order completion. Created flowcharts showing:
- **Happy path:** Smooth ordering with no errors or changes
- **Loyalty member path:** Personalized experience with points and offers
- **Error scenarios:** Payment failure, item unavailable, timeout
- **Edit flows:** Changing quantity, modifying items, removing from cart

This systematic mapping revealed opportunities to **consolidate screens** and **reduce decision fatigue**.

### Phase 2: Wireframing & Concept Testing

Created initial wireframes that simplified the user interface, focusing on **minimal screens and taps** for faster order completion.

**Key decisions from wireframing:**
- **Single-column menu layout** instead of grid allowed larger touch targets
- **Persistent cart widget** in corner provided constant order visibility
- **Category pills** at top enabled quick category switching without back navigation
- **Floating action button** (Checkout) remained accessible throughout browsing

Tested paper prototypes with 5 internal team members to validate flow before moving to high-fidelity.

### Phase 3: High-Fidelity Design & Prototyping

Developed interactive prototypes using Figma to simulate the kiosk experience:
- **Created actual-size artboards** matching the 15" kiosk dimensions
- **Added touch interactions** with tap animations and state changes
- **Simulated payment flows** including card reader interactions
- **Designed for outdoor lighting** (higher contrast for visibility)

Prototypes were tested on the actual hardware to ensure:
- Touch responsiveness matched design expectations
- Colors were readable under different lighting
- Text size was legible from standing position
- Interaction feedback was immediate and clear

### Phase 4: Iteration Based on Feedback

Based on internal feedback and usability testing with merchants and customers, I made several critical design iterations that significantly improved usability and reduced friction:

#### Iteration 1: Redesigned Category Navigation for Precise Selection

**Before:** Text-based tabs with underline indicator and tight spacing made it difficult to accurately tap the intended category, especially for users with larger fingers or when standing at an angle.

![Tabs Before](Tabs before.png)

**After:** Pill-style buttons with generous padding, rounded edges, and clear spacing between each option. The orange fill provides unmistakable active state feedback.

![Tabs After](Tabs After.png)

**Impact:**
- **Easier to click the right item:** Larger touch targets and spacing between categories reduced accidental taps by 35%
- Users could confidently switch between menu sections without fear of selecting the wrong category
- The distinct visual separation made quick scanning and navigation effortless

---

#### Iteration 2: Horizontal Layout for Modifier Selection

**Before:** Checkbox-based modifiers stacked vertically on the left forced users to scroll extensively. Product image overlapped the selection area, creating visual clutter and reducing available space for options.

![Modifier Before](modifier before.png)

**After:** Utilized horizontal space by placing product image on the left and modifier options in a spacious grid on the right. Button-style selections with clear grouping and visual hierarchy.

![Modifier After](modifier after.png)

**Impact:**
- **Reduced scrolling:** Horizontal layout fit more options above the fold, eliminating 60% of scrolling during customization
- **Improved hierarchy:** Clear section headers ("Optional Selections", "Cheese", "Meat") helped users understand the structure at a glance
- **Better space utilization:** Making full use of the landscape kiosk screen allowed both product context and all major options to remain visible simultaneously
- 40% reduction in mis-taps due to larger touch targets and spacing

---

#### Iteration 3: Cart Redesign for Information Clarity

**Before:** Loyalty rewards dominated the top of the screen, pushing actual order items and pricing below. Visual hierarchy made it unclear what was most important. The checkout button redundantly showed the price.

![Cart Before](cart before.png)

**After:** Restructured with clear information hierarchy—"Shopping Bag" title with item count, order items prominently displayed, pricing breakdown clearly separated, and loyalty/actions as secondary elements at bottom.

![Cart After](Cart after.png)

**Impact:**
- **Improved hierarchy:** Order contents became the hero, with supporting information (rewards, totals) properly subordinated
- **Clearer information readability:** Simplified typography, better use of whitespace, and logical grouping made scanning effortless
- **Better visual flow:** Users could review items → check total → take action in a natural top-to-bottom reading pattern
- Item count "(4)" in header provided immediate feedback without requiring users to count manually
- Separated secondary actions ("Start Over", "Coupon Code") reduced visual clutter and prevented accidental taps

### Phase 5: Collaboration & Handoff

**With Product Management:**
- Aligned on MVP scope and phased rollout strategy
- Prioritized features based on merchant feedback and business goals
- Defined success metrics and tracking plan

**With Engineering:**
- Created detailed design specifications in Figma
- Documented interaction patterns and edge cases
- Provided all visual assets and style guidelines
- Participated in sprint planning and standups
- Conducted QA reviews throughout development

**With Hardware Team:**
- Ensured design worked within hardware constraints (screen resolution, touch sensitivity)
- Tested prototypes on actual kiosk hardware
- Validated performance under real-world conditions

---

## Solution

### Streamlined User Experience

The final kiosk experience is built around speed, clarity, and confidence:

#### Welcome & Loyalty Detection

**Auto-detection of loyalty members** via phone number lookup creates a personalized experience immediately. Non-members can proceed as guests with option to join later.

**Design details:**
- Large, welcoming restaurant logo and branding
- Clear "For Here" vs "To Go" options with iconography
- Status messages (e.g., "Currently on break. Accepting orders in 15 minutes")
- Animated idle screen that attracts attention

#### Menu Navigation

**Horizontal scrolling category pills** allow quick navigation between menu sections (Breakfast, Lunch, Dinner, Sides, Dessert) without losing context.

**Visual-first item cards** display:
- High-quality food photography
- Item name and short description
- Price prominently displayed
- "Sold Out" badge when applicable
- Dietary icons (vegetarian, gluten-free, etc.)

**Persistent elements:**
- Shopping bag icon with item count
- Loyalty points balance (for members)
- Category navigation always visible

#### Item Customization

**Modal-based modifier selection** keeps users focused on one item at a time:
- Large product image maintains context
- Grouped modifiers (Size, Cheese, Meat, Add-ons)
- Clear "Select at least X" or "Optional" labels
- Quantity selector prominently placed
- Running price updates as selections change
- "Add to Cart" button with updated price

**Smart defaults:**
- Most popular options pre-selected where appropriate
- Required selections highlighted until completed
- Allergen warnings for relevant ingredients

#### Cart Review & Editing

**Clear order summary** shows all items with modifications:
- Expandable item details to see all modifiers
- Edit and Remove options for each item
- Subtotal, surcharges, taxes broken out clearly
- Loyalty offers applied automatically
- Prominent "Checkout" call-to-action

#### Customer Information

**Minimal friction data collection:**
- Name input for order calling
- Phone number for SMS updates
- Option to save details for future orders
- Skip functionality where appropriate
- On-screen keyboard optimized for touch

#### Payment Choice

**Flexible payment options:**
- **Pay at Kiosk:** Insert card, tap, or mobile wallet
- **Pay at Counter:** Complete order, pay with cashier

Clear explanation of each option helps customers choose confidently.

#### Order Confirmation

**Reassuring completion screen:**
- Order number displayed prominently
- Estimated wait time
- "Your order is being prepared" status
- Option to print or text receipt
- Returns to idle screen after timeout

---

## Impact & Results

### Business Impact

**Operational Efficiency**

The streamlined kiosk flow delivered **30% faster order completion** compared to previous systems and staff-entered orders:
- Average order time reduced from 4.5 minutes to 3.1 minutes
- Peak hour throughput increased by 35%
- Staff freed up to focus on food preparation and service

This efficiency gain translates directly to higher revenue potential during busy periods and improved customer satisfaction scores.

**Increased Adoption Through Flexibility**

The dual payment options (register or kiosk) provided greater flexibility, contributing to **20% higher kiosk usage**:
- Customers uncomfortable with card entry could order via kiosk and pay at counter
- Reduced perceived risk increased first-time kiosk adoption
- Repeat usage rates improved as customers gained confidence

**Improved System Stability**

Clear error handling and intuitive design led to **15% decrease in support tickets** related to kiosk issues:
- Payment failure screens provided clear next steps
- Timeout warnings prevented abandoned orders
- Better instructions reduced user confusion
- Merchant training needs decreased

### User Impact

**Qualitative Feedback:**

> "Way faster than waiting in line. Love that I can see exactly what I'm ordering." — Customer feedback

> "The kiosk handles our lunch rush so much better now. Customers can order while we focus on making food." — Restaurant operator

> "Being able to customize my burger exactly how I want it, without feeling rushed, is great." — Customer feedback

### Metrics Summary

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Average order time** | 4.5 minutes | 3.1 minutes | **-30%** |
| **Kiosk adoption rate** | 42% | 62% | **+20%** |
| **Support tickets** | 180/month | 153/month | **-15%** |
| **Order accuracy** | 87% | 96% | **+9%** |
| **Peak hour capacity** | 30 orders/hour | 40 orders/hour | **+35%** |

---

## Learnings & Reflections

### What Worked Well

**1. Hardware-First Design Approach**

Designing specifically for the Advantech UTK-615 hardware from day one—rather than adapting a mobile design—resulted in a more natural, optimized experience. Testing on actual hardware throughout the design process caught issues early.

*Impact:* Zero hardware-related design revisions post-launch. Interactions felt natural and responsive from day one.

**2. Ruthless Scope Management**

Resisting feature creep and focusing on MVP essentials (order, customize, pay) allowed us to launch quickly and iterate based on real usage data rather than assumptions.

*Impact:* MVP delivered on schedule. Post-launch data informed Phase 2 priorities more effectively than pre-launch speculation would have.

**3. Dual Payment Option**

Initially, stakeholders wanted kiosk-only payment to drive efficiency. I advocated for the "pay at counter" option based on research showing adoption barriers. This compromise significantly increased adoption.

*Impact:* 20% adoption increase validated the decision. Many "pay at counter" users later converted to "pay at kiosk" after gaining confidence.

**4. Visual-First Menu Design**

Investing in high-quality food photography and large imagery paid dividends. Users browsed faster and ordered more confidently when they could see what they were ordering.

*Impact:* Reduced order abandonment and increased average order value (customers added items they saw in photos).

### Challenges & How We Addressed Them

**Challenge 1: Touch Target Size vs. Information Density**

Kiosks require larger touch targets than mobile devices, but we needed to show enough menu items to enable quick browsing. Initial designs felt either cramped or sparse.

**Solution:** Adopted a hybrid approach with category filtering and vertical scrolling within categories. This allowed larger touch targets while maintaining discoverability.

**Challenge 2: Loyalty Integration Complexity**

Loyalty system integration added significant complexity to the flow. Early designs had 3 additional screens just for loyalty lookup and offer selection.

**Solution:** Automated loyalty detection via phone number and auto-applied best offers. Reduced 3 screens to a simple "You're earning points!" confirmation.

**Challenge 3: Error State Design**

Kiosk errors (payment decline, system timeout, printer jam) needed clear, actionable guidance without technical jargon or blame.

**Solution:** Created a comprehensive error pattern library with plain-language explanations and specific next steps. Added visual icons to convey error severity without words.

### Future Opportunities

**1. Personalized Recommendations**

Leverage order history and popular items to suggest add-ons or upsells contextually. "People who ordered this burger also loved our fries."

**2. Nutritional Transparency**

Provide calorie counts, allergen information, and dietary filters for health-conscious customers. Increasingly expected in QSR environments.

**3. Voice Ordering Integration**

Explore voice input for accessibility and hands-free ordering, especially post-pandemic hygiene concerns.

**4. Deeper Loyalty Integration**

Currently, loyalty is basic points accumulation. Future versions could enable rewards redemption, personalized offers, and gamification.

**5. Multi-Language Support**

Spanish is a clear priority for many restaurant locations. A robust translation system would expand accessibility.

### Key Takeaway

The most important lesson from this project: **Context-specific design beats platform-agnostic design.** A kiosk is not a large phone or a small tablet—it's a unique form factor with unique use cases (standing, public, time-sensitive, touch-only). Designing specifically for this context, rather than adapting existing patterns, resulted in a more intuitive and efficient experience.

The 30% reduction in order time validates that **designing for the moment matters**. Customers at a kiosk want speed and confidence, not exploration or delight. Meeting users in their moment of need with a focused, efficient experience drove measurable business impact.

Great product design isn't about applying best practices universally—it's about understanding the specific context, constraints, and user goals, then crafting an experience that serves those unique needs.

---

## Design Artifacts

[Screenshots from wireframes, prototypes, and final designs would go here]

### User Flows
- Complete ordering journey (loyalty member)
- Complete ordering journey (guest user)
- Error handling flows
- Edit order scenarios

### High-Fidelity Mockups
- Welcome screens (loyalty vs. guest)
- Menu navigation and category browsing
- Item customization with modifiers
- Cart review and editing
- Customer information capture
- Payment option selection
- Order confirmation

### Prototypes
- Interactive Figma prototype simulating full kiosk experience
- Hardware-tested prototype on actual Advantech UTK-615

### Design System Components
- Kiosk button patterns (primary, secondary, tertiary)
- Touch target specifications and spacing
- Typography scale optimized for distance viewing
- Color palette with high contrast for visibility
- Modal patterns for item customization
- Error message components

---

## Technical Details

**Design Tools:** Figma, FigJam
**Collaboration:** Weekly design reviews, daily standups, Slack for async communication
**Prototyping:** Figma prototypes tested on actual hardware
**Handoff:** Figma Dev Mode with detailed specs, Zeplin for asset delivery

**Hardware Specifications:** Advantech UTK-615 Kiosk (15" touchscreen, 1024×768 resolution)

**Design System:** Extended existing SkyTab design system with kiosk-specific components and patterns optimized for large touchscreens.

---

## Credits & Acknowledgments

**Design:** Ricky Liu
**Product Management:** [PM name]
**Engineering:** [Engineering team]
**Hardware Partner:** Advantech
**Merchant Feedback:** [Restaurant partners]

---

*Last updated: November 2025*
