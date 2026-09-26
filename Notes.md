Heto ang kumpletong Master Reference Guide ng LAHAT ng napag-aralan natin, kasama ang kung paano sila nagkakasama-sama at ang mga Best Practices sa React development:
1. Ang Bawat Pundasyon (Core Concepts)
📄 JSX (JavaScript XML)
 * Ano ito: Ang syntax para makapagsulat ng mukhang HTML sa loob ng JavaScript (.jsx).
 * Paano gumagana: Kino-convert ito ng Babel papuntang totoong document.createElement() sa JavaScript.
 * Tandaan: Kailangang may 1 Root Container (<div> o <>...</>), className sa halip na class, at nakaloob sa curly braces {} ang mga JS variables.
📦 Props (Properties)
 * Ano ito: Data na ipinapasa mula sa Parent Component papunta sa Child Component (parang arguments sa function).
 * Tandaan: Ang Props ay Read-Only (Immutable). Hindi pwedeng direktang palitan ng Child component ang natanggap nitong props.
🧠 State (useState)
 * Ano ito: Ang memory o storage ng isang component para sa data na pwedeng magbago.
 * Paano gumagana:
   const [data, setData] = useState(initialValue)

 * Tandaan: Bawat beses na tawagin ang setData(), awtomatikong nag-re-render ang component para i-update ang mukha ng UI sa screen.
💾 LocalStorage Integration
 * Ano ito: Storage ng browser para manatili ang data kahit i-refresh o isara ang tab.
 * Dalawang Katambal na JSON Functions:
   * JSON.stringify(object) \rightarrow Ginagawang text/string ang JS Object/Array bago i-save (localStorage.setItem()).
   * JSON.parse(string) \rightarrow Binabalik sa JS Object/Array ang text pagka-get (localStorage.getItem()).
🔀 Conditional Rendering (3 Ways)
Ang paraan ng pagpili kung anong UI ang ipapakita sa screen batay sa condition (halimbawa: loading o error):
 * Nested Ternary (? :) \rightarrow Inline sa loob ng JSX.
 * Standard JS if / else \rightarrow Sa labas ng return () gamit ang variable (e.g., let content).
 * Vanilla JS Way \rightarrow Manual DOM update gamit ang .innerHTML (walang React).
⚡ Side Effects & API Fetching (useEffect)
 * Ano ito: Hook na nagpapatakbo ng code pagkatapos mai-render ang component sa screen (halimbawa: pag-fetch ng data sa server).
 * Dependency Array [] Mechanics:
   * [] (Empty): Isang beses lang tatakbo sa page load. Ito ang gamit sa API Fetching para maiwasan ang Infinite Loop.
   * [variable]: Tatakbo sa page load AT sa tuwing magbabago ang value ng variable (e.g., search queries, filters).
   * Walang []: Tatakbo sa BAWAT re-render (delikado!).
🛡️ Modern Async/Await & Error Handling
Ang malinis na paraan ng pakikipag-usap sa APIs:
try {
  const response = await fetch("https://...")
  const data = await response.json()
  setdData(data)
} catch (error) {
  console.log("Error:", error)
} finally {
  setLoading(false) // Tinitiyak na mag-o-off ang loading indicator
}

🛠️ Essential JavaScript Helpers
 * Optional Chaining (?.): Halimbawa: user?.name. Pinipigilan ang white-screen crash habang null pa ang data.
 * Array .map(): Ginagamit para mag-loop sa listahan at gawan ng JSX card ang bawat item.
 * key Prop: Unique ID (e.g., key={user.id}) na kailangan ni React sa .map() para ma-track ang mga cards sa listahan.
2. Paano Sila Nagkakasama-sama (The Whole Picture)
Kapag pinagsama-sama natin ang lahat sa isang totoong React application, ganito ang nagiging lifecycle flow:
[ STEP 1: INITIAL STATE ]
  • useState(null) para sa single data, O useState([]) para sa array list.
  • useState(true) para sa loading indicator.
  • Output: Ang UI ay nagpapakita ng "Loading..." gamit ang Conditional Rendering.

       │
       ▼
[ STEP 2: TRIGGER EFFECT ]
  • Babasahin ni React ang useEffect sa unang render dahil sa empty array [].
  • Tatakbo ang async function para mag-fetch sa API gamit ang try/catch/finally.

       │
       ▼
[ STEP 3: STATE UPDATE & ERROR HANDLING ]
  • kapag SUCCESS -> Isasaksak ang nakuha sa API papuntang useState (setData/setUsers).
  • kapag ERROR   -> Sasaluhin ng catch block.
  • FINALLY block -> Magse-setLoading(false) para sabihing tapos na ang request.

       │
       ▼
[ STEP 4: RE-RENDER WITH DATA ]
  • Dahil nagbago ang State, mag-re-render ang component.
  • Gamit ang Optional Chaining (data?.name) o Array .map() (users.map()),
    mapapalitan ang "Loading..." ng totoong cards sa screen!

3. Best Practices Checklist
 * Pumili ng tamang Initial State:
   * Single Object \rightarrow useState(null)
   * Array / Listahan \rightarrow useState([]) (Para hindi mag-crash ang .map())
 * Laging maglagay ng [] sa useEffect sa Fetching: Huwag na huwag itong kalimutan para maiwasan ang Infinite Loop.
 * Laging gumamit ng try/catch/finally: Huwag kalimutang ilagay ang setLoading(false) sa finally block para siguradong mawawala ang loading state.
 * Gamitin ang Optional Chaining (?.): Iwasan ang pagbasa ng property sa null o undefined state.
 * Gamitin ang key prop sa .map(): Laging maglagay ng unique identifier tulad ng key={item.id} kapag nag-ro-render ng array.
 * Mas malinis na Conditional Rendering: Mas mainam gamitin ang Standard if/else sa labas ng return () kapag humahaba ang logic kaysa maging magulo ang ternary operators.
Pwede mo ring kopyahin o i-save itong kabuuang buod sa iyong GitHub notes! Ready ka na ba sa sunod nating hakbang pagkaharap mo sa PC/editor mo?

