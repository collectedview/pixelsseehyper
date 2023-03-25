## Develop React Application Locally

1. Change To React Application Directory:

```zsh
cd ui
```

2. Cleanup Code:

```zsh
yarn prettier --write .
```

3. Start React Application:

```zsh
yarn dev
```

4. Access React Application:

Access @ [http://localhost:3000](http://localhost:3000)

## Develop Python Application Locally

1. Change To Python Application Directory:

```zsh
cd py
```

2. Create Requirements File:

```zsh
pip freeze > requirements.txt || pip install pipreqs
```

3. Install Requirements File:

```zsh
pip install -r requirements.txt
```

4. Test Requirements File:

```zsh
python -m pip check
```

5. Start Python Application:

```zsh
python -m pip check
```

#### Acknowledgements (v0.2.0):

- [Building a responsive camera component with React Hooks](https://blog.logrocket.com/responsive-camera-component-react-hooks/)
- [getUserMedia React](https://codesandbox.io/s/p6l8l?file=/package.json)
- [The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Capture audio and video in HTML5](https://web.dev/getusermedia-intro/)
- [JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists](https://bobbyhadz.com/blog/react-jsx-element-implicitly-has-type-any)
- [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)
- [Support srcObject attribute for video element #11163](https://github.com/facebook/react/issues/11163#issuecomment-628379291)


#### Acknowledgements (v0.2.1)

- [PyTorch Video API](https://pytorch.org/vision/main/auto_examples/plot_video_api.html)
- [UserWarning: video_reader video backend is not available](https://github.com/pytorch/vision/issues/2216)
- [PyTorch object detection with pre-trained networks](https://pyimagesearch.com/2021/08/02/pytorch-object-detection-with-pre-trained-networks/)
