import { FC } from "react";
import { Game } from "../types";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./platform-icon-list";
import { CriticScore } from "./critic-score";
import { getCroppedImageUrl } from "../services/image-url";
import { Emoji } from "./emoji";
import { Link } from "react-router-dom";

type GameProps = {
  game: Game;
};

export const GameCard: FC<GameProps> = ({ game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};
