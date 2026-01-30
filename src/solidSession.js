import { Session } from "@inrupt/solid-client-authn-browser";

let currentSession = new Session({
  clientName: "Solid Data Manager",
  sessionId: "data-manager",
});

const session = {
  get info() {
    return currentSession.info;
  },
  fetch: (...args) => currentSession.fetch(...args),
  login: (...args) => currentSession.login(...args),
  logout: (...args) => currentSession.logout(...args),
  handleIncomingRedirect: (...args) => currentSession.handleIncomingRedirect(...args),
};

export const setSession = (nextSession) => {
  if (nextSession) {
    currentSession = nextSession;
  }
};

export async function restoreSession() {
  await session.handleIncomingRedirect({ restorePreviousSession: true });
  return session;
}

export default session;
