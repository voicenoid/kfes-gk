import { VFC, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

// 略
type  ServiceWorkerUpdateDialogProps = {
    registration :any
}

export const ServiceWorkerUpdateDialog: VFC<ServiceWorkerUpdateDialogProps> = function SWUpdateDialog(props: ServiceWorkerUpdateDialogProps) {
  const { registration } = props;
  const [show, setShow] = useState(!!registration.waiting);
  const handleUpdate = () => {
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    setShow(false);
  };

  return (
    <Dialog open={show}>
      <DialogTitle style={{textAlign: "center"}}>
        アップデート通知
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          新しいバージョンがリリースされました。
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{justifyContent: "center"}}>
        <Button onClick={handleUpdate}>アップデート</Button>
      </DialogActions>
    </Dialog>
  );
};