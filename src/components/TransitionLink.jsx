import { useNavigate, useHref } from 'react-router-dom';

// ponytail: instant client-side navigation with a real <a href> (keyboard/screen-reader friendly)
export default function TransitionLink({ href, onClick, children, back = false, ...rest }) {
  const navigate = useNavigate();
  const resolvedHref = useHref(href ?? '/');

  const handleLinkClick = (e) => {
    e.preventDefault();

    if (back) {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } else if (href) {
      navigate(href, { state: { from: e } });
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <a {...rest} href={resolvedHref} onClick={handleLinkClick}>
      {children}
    </a>
  );
}
