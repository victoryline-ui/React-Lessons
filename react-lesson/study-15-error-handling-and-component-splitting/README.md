try / catch / finally + !res.ok: Hindi nagba-throw ng error ang fetch() sa HTTP errors (404, 500), kaya kailangan ang if (!res.ok) throw new Error(...) para pumasok ito sa catch. Ang finally ang laging nagpapatay ng setLoading(false).

Empty State: Gamit ang {filteredUsers.length === 0 && <p>No users found.</p>} para magpakita ng fallback UI kapag walang tugma sa search.

Component Splitting & Lifting State Up: Nasa Parent (UserDirectory) ang state at logic (users, addUser, dltUser), habang ang Child components (UserForm, SearchBar, UserItem) ay taga-display lang at nagpapasa ng actions pabalik sa Parent gamit ang callback props.

Golden Rule sa key: Laging nakalagay ang key={user.id} sa pinakalabas na element sa loob ng .map() (sa <UserItem/> sa Parent), hindi sa loob ng Child component.
