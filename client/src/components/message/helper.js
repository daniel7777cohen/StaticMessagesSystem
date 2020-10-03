
export const getSortedMessagesByUserId = (messages, userId,type) => {
  const filtered = messages.filter(
    (message) => message[type].toString() === userId
  );
  const sorted = filtered.sort(sortArrayByDate);
  return sorted;
};

const sortArrayByDate = (a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};

export const getReceiverOrSenderName = (usersList, type, message) => {
  const id = type === "received" ? message.senderId : message.receiverId;
  const { name } = usersList.filter((user) => user._id === id)[0];
  return name;
};
