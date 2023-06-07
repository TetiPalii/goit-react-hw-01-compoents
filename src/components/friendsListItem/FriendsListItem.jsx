import * as S from './FriendListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <S.FriendListItem>
      <S.Status status={isOnline}></S.Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </S.FriendListItem>
  );
};
