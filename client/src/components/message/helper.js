

export const getReceiverOrSenderName = (type, message) => {
  return type === "received" ? message.senderId.name : message.receiverId.name;
};
