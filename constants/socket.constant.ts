export const SOCKET_EVENT = {
  // Client Events
  JOIN_CHAT_ROOM: 'JOIN_CHAT_ROOM',
  NEW_MESSAGE_CHAT_ROOM: 'NEW_MESSAGE_CHAT_ROOM',
  DELETE_MESSAGE_CHAT_ROOM: 'DELETE_MESSAGE_CHAT_ROOM',
  ADD_REACTION: 'add_reaction',
  REACTION_ADDED: 'reaction_added',
  REACTION_UPDATED: 'reaction_updated',

  // Server Events
  JOINED_CHAT_ROOM: 'JOINED_CHAT_ROOM',
  BROADCAST_NEW_MESSAGE_CHAT_ROOM: 'BROADCAST_NEW_MESSAGE_CHAT_ROOM',
  DELETED_MESSAGE_CHAT_ROOM: 'DELETED_MESSAGE_CHAT_ROOM',
};