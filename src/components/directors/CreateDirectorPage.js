import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadDirectors,
  saveDirector,
} from "../../redux/actions/directorActions";
import PropTypes from "prop-types";
import DirectorForm from "./DirectorForm";
import { newDirector } from "../../mockDb/mockData";
import { FormValidation } from "../common/FormValidation";

function CreateDirectorPage({
  directors,
  loadDirectors,
  saveDirector,
  history,
  ...props
}) {
  const [director, setDirector] = useState({ ...props.director });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (directors.length === 0) {
      loadDirectors().catch((error) => {
        alert("Loading directors failed" + error);
      });
    } else {
      setDirector({ ...props.director });
    }
  }, [props.director]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDirector((prevDirector) => ({
      ...prevDirector,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!FormValidation(setErrors, director)) return;
    setSaving(true);
    saveDirector(director).then(() => {
      history.push("/mediaItems");
    });
  }

  return (
    <DirectorForm
      director={director}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

CreateDirectorPage.propTypes = {
  director: PropTypes.object.isRequired,
  directors: PropTypes.array.isRequired,
  loadDirectors: PropTypes.func.isRequired,
  saveDirector: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getDirectorBySlug(directors, slug) {
  return directors.find((director) => director.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const director =
    slug && state.directors.length > 0
      ? getDirectorBySlug(state.directors, slug)
      : newDirector;

  return {
    director,
    directors: state.directors,
  };
}

const mapDispatchToProps = {
  loadDirectors,
  saveDirector,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDirectorPage);
