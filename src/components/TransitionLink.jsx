import { useNavigate, useHref } from 'react-router-dom';

// ponytail: instant client-side navigation with a real <a href> (keyboard/screen-reader friendly)
export default function TransitionLink({ href, back = false, children, ...rest }) {
  const navigate = useNavigate();
  const resolvedHref = useHref(href ?? '/');

  const handleLinkClick = (e) => {
    e.preventDefault();

    if (back) {
      // Guard so a deep-linked project page with no history goes home.
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  return (
    <a {...rest} href={resolvedHref} onClick={handleLinkClick}>
      {children}
    </a>
  );
}
