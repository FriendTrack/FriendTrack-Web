import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Radar } from "react-chartjs-2";
import { Friend } from "../RatingPage";
import ListElementAvatar from "./ListElementAvatar";

interface FriendAnalyticDialogProps {
  isOpen: boolean;
  onClose: () => void;
  friend: Friend | null;
}

const FriendAnalyticDialog = ({
  isOpen,
  onClose,
  friend,
}: FriendAnalyticDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex items-end gap-3 flex-row">
          <ListElementAvatar
            name={friend?.name[0] || ""}
            src={friend?.avatar || ""}
          />
          <div>
            <DialogTitle className="text-lg font-semibold">
              {friend?.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500">
              <span>Средний рейтинг: </span>
              {(friend?.stats?.communication! +
                friend?.stats?.empathy! +
                friend?.stats?.pastime! +
                friend?.stats?.respect! +
                friend?.stats?.trust!) /
                5}
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex gap-6 flex-wrap">
          <Radar
            data={{
              labels: [
                "Коммуникация",
                "Уважение",
                "Доверие",
                "Времяпрепровождение",
                "Эмпатия",
              ],
              datasets: [
                {
                  label: friend?.name,
                  data: [
                    friend?.stats.communication,
                    friend?.stats.respect,
                    friend?.stats.trust,
                    friend?.stats.pastime,
                    friend?.stats.empathy,
                  ],
                  backgroundColor: "blue",
                },
              ],
            }}
            options={{
              scales: {
                r: {
                  ticks: {
                    display: true,
                    stepSize: 1,
                  },
                  min: 0,
                  max: 5,
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FriendAnalyticDialog;
