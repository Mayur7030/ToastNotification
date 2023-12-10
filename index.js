let toastbox = document.getElementById("toastbox");
let successmes =
  ' <i class="fa-solid fa-circle-check"></i>Successfully submitted';
let Failuremes =
  '<i class="fa-solid fa-circle-exclamation"></i>plese fix the error!';
let invalidmes = '<i class="fa-solid fa-circle-xmark"></i>invalid input,check again';

const showtoast = (e) => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = e;
  toastbox.appendChild(toast);

  if (e.includes("error")) {
    toast.classList.add("error");
  }
  if (e.includes("invalid")) {
    toast.classList.add("failure");
  }
  setTimeout(() => {
    toast.remove()
  }, 5000);
};
