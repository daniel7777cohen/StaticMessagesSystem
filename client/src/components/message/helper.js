export const getReceivedMessages = (messages, userId) => {
  return messages.filter((message) => message.receiverId.toString() === userId);
};
export const getSentMessages = (messages, userId) => {
  return messages.filter((message) => message.senderId.toString() === userId);
};
