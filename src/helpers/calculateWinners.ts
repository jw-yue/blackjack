import { PlayerInfo } from "@/types";
import { calculateSum } from "@/helpers/calculateSum";

export function calculateWinners(allPlayerInfo: PlayerInfo[]) {
  if (!allPlayerInfo) {
    return;
  }

  const dealerSum = calculateSum(allPlayerInfo?.[0].hand);

  allPlayerInfo.slice(1).forEach((playerInfo) => {
    const playerSum = calculateSum(playerInfo.hand);
    const hasNoRole = playerInfo.roundRoles.length <= 0;

    if ((dealerSum < playerSum || dealerSum > 21) && hasNoRole) {
      playerInfo.roundRoles.push("WINNER");
    } else if (dealerSum === playerSum && hasNoRole) {
      playerInfo.roundRoles.push("TIE");
    }
  });

  return allPlayerInfo;
}
