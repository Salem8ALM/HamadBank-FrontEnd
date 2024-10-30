import React, { useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { transferFunds } from "@/api/actions/auth";

function IndividualUserCard({ user }) {
  const [open, setOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");

  async function handleTransfer(e) {
    e.preventDefault();
    try {
      await transferFunds(transferAmount, user.username);
      setTransferAmount(0); // Reset amount after transfer
      setOpen(false); // Close drawer after successful transfer
    } catch (error) {
      console.error("Transfer failed:", error);
    }
  }

  return (
    <div
      key={user._id}
      className="bg-white p-4 border rounded-md text-center shadow-md hover:shadow-lg"
    >
      <img
        src={
          user.image
            ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
            : "defaultimage.png"
        }
        alt={user.username}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
      />
      <h3 className="text-lg font-semibold text-black">{user.username}</h3>
      <h3 className="text-lg font-semibold text-black">
        <span>Balance: </span>
        {user.balance}
      </h3>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="ml-2 px-2 py-1 text-black rounded-md hover:bg-green-600 transition-colors"
          >
            Transfer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="text-center">
              <DrawerTitle>Transfer to {user.username}</DrawerTitle>
            </DrawerHeader>
            <form onSubmit={handleTransfer} className="px-4">
              <div className="grid gap-2 mb-4">
                <Label htmlFor="transferAmount">Amount</Label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <Input
                    id="transferAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(Number(e.target.value))}
                    onKeyDown={(event) => {
                      if (
                        !/[0-9]/.test(event.key) &&
                        event.key !== "Backspace"
                      ) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4">
                Transfer ${transferAmount || ""}
              </Button>
            </form>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default IndividualUserCard;
