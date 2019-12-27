import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


export default function MemberList({ members, onDelete }) {
  return (
    <div>
      <List>
        {members.map(member => (
          <div key={member.id}>
            <ListItem>
              <ListItemText>{member.firstName}</ListItemText>
              <IconButton onClick={() => onDelete(member.id)}>
                <DeleteIcon
                  size="small"
                />
              </IconButton>
            </ListItem>
            <Divider varient="inset"></Divider>
          </div>
        ))}
      </List>
    </div>
  );
}
