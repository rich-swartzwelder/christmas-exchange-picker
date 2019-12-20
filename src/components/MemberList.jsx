import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

export default function MemberList({ members, onDelete }) {
  return (
    <div>
      <List>
        {members.map(member => (
          <ListItem key={member.id}>
            <ListItemText>{member.firstName}</ListItemText>
            <Delete size="small" onClick={() => onDelete(member.id)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
