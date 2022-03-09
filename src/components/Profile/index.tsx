import { profile } from "~/data";
import { Section, Title } from "~/styles/components";

import { ProfileContent } from "./styles";

const Profile = () => (
  <Section>
    <Title>{profile.title}</Title>
    <ProfileContent>{profile.content}</ProfileContent>
  </Section>
);

export default Profile;
