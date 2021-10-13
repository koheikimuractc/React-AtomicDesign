import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hoge-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345.example.com",
    phone: "090-1111-2222",
    company: {
      name: "ABC Company"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>USERS PAGE NOW</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

//いい感じのレスポンシブデザインにしてくれる
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
