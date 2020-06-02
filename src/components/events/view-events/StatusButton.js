import React from "react";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../utilities/actions";
import { buttonStyles } from "../../../styles";

import { print } from "graphql";
import { UPDATE_INVITATION } from "../../../graphql/events/event-mutations";

const StatusButton = ({
  name,
  color,
  eventStatus,
  eventId,
  userId,
  setStatus,
}) => {
  const classes = buttonStyles();
  const dispatch = useDispatch();

  const updateStatus = (newStatus) => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(UPDATE_INVITATION),
        variables: {
          input: {
            event_id: parseInt(eventId),
            user_id: parseInt(userId),
            status: newStatus,
          },
        },
      })
      .then((res) => {
        const newStatus = res.data.data.updateInvitation.users.filter(
          (u) => `${u.id}` === `${userId}`
        )[0].status;
        setStatus(newStatus);
        dispatch(changeStatus(eventId, newStatus));
      });
  };
  return (
    <button
      className={`${classes.rsvpRoot} ${
        eventStatus === name && classes.rsvpActive
      }`}
      style={{ background: color }}
      name={name}
      onClick={(e) => {
        e.preventDefault();
        updateStatus(e.target.name);
      }}
    >
      {name === "Going" ? "Yes" : name === "Not Going" ? "No" : "Maybe"}
    </button>
  );
};

export default StatusButton;
