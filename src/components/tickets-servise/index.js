class ticketsServes {
  api_Base = "https://aviasales-test-api.kata.academy/";
  id = localStorage.getItem("aviaId");

  async getId() {
    const params = new URL("search", this.api_Base);
    const res = await fetch(params);
    return await res.json().then(({ searchId }) => {
      this.id = searchId;
      localStorage.setItem("aviaId", searchId);
    });
  }

  async getTickets() {
    const params = new URL("tickets", this.api_Base);
    params.searchParams.set("searchId", this.id);
    const res = await fetch(params);
    return await res.json().then((res) => {
      return res;
    });
  }
}

export { ticketsServes };
