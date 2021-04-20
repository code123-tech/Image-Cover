import React, { useEffect, useState } from "react";
import Select from "react-select";
import ChevronDown from "../ChevronDown.js";
import ComponentToImg from "../ComponentToImg.js";
import ImageCover from "../ImageCover/ImageCover";
import RandomTheme from "../RandomTheme/RandomTheme.js";
import Border from "./Border.js";
import "./MainCover.css";
import { defaultSetting, borders, patterns } from "./DefaultValues";
import { ColorSvg, BorderSvg, BackgroundSvg, DevIcon } from "./SvgImoprt";

export default function MainCover() {
  const [settings, setSettings] = useState(defaultSetting);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
    )
      .then((r) => r.json())
      .then((data) => {
        setSettings({
          ...settings,
          devIconOptions: data.map((item) => ({
            value: item.name,
            label: item.name
          }))
        });
      });
  }, []);

  const validationCheck = (e) => {
    if (e.target.value > 50) {
      e.target.value = 50;
    }
  };

  const handleReset = () => {
    setSettings(defaultSetting);
  };
  const getRandomImage = (theme, pattern) => {
    // console.log(theme, pattern);
    setSettings({
      ...settings,
      bgColor: theme.bgColor,
      borderColor: theme.bdColor,
      pattern: pattern
    });
  };
  return (
    <div className="main-continaer">
      <div className="inputData card">
        <h1>ImageCover</h1>
        <p className="tagline">Create Your Cover Images</p>
        <input
          type="text"
          className="form-control inputTitle"
          placeholder="Enter title here"
          onChange={(e) => setSettings({ ...settings, title: e.target.value })}
        />
        <input
          type="text"
          className="form-control inputTitle"
          placeholder="Author"
          onChange={(e) => setSettings({ ...settings, author: e.target.value })}
        />
        <details>
          <summary>
            <ColorSvg />
            <label>Colors</label>
            <ChevronDown />
          </summary>
          <div>
            <label>BackGround</label>
            <input
              type="color"
              value={settings.bgColor}
              onChange={(e) =>
                setSettings({ ...settings, bgColor: e.target.value })
              }
            />

            <label>Border</label>
            <input
              type="color"
              value={settings.borderColor}
              onChange={(e) =>
                setSettings({ ...settings, borderColor: e.target.value })
              }
            />
          </div>
          <div>
            <label>ForeGround</label>
            <input
              type="color"
              value={settings.foregroundColor}
              className="mr-4"
              onChange={(e) =>
                setSettings({ ...settings, foregroundColor: e.target.value })
              }
            />

            <label>Text</label>
            <input
              type="color"
              value={settings.textColor}
              onChange={(e) =>
                setSettings({ ...settings, textColor: e.target.value })
              }
            />
          </div>
          <label>Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={settings.opacity}
            onChange={(e) =>
              setSettings({ ...settings, opacity: e.target.value })
            }
            className="custom-range"
          />
        </details>
        <details>
          <summary>
            <BorderSvg />
            <label>Border</label>
            <ChevronDown />
          </summary>
          <div className="d-flex flex-row">
            <div className="input-sm">
              <label>Size</label>
              <input
                type="number"
                max="50"
                onInput={validationCheck}
                value={settings.borderSize}
                className="form-control"
                onChange={(e) =>
                  setSettings({ ...settings, borderSize: e.target.value })
                }
              />
            </div>
            <div className="input-sm">
              <label>Border Type</label>
              <select
                className="form-control ml-1"
                onChange={(e) =>
                  setSettings({ ...settings, borderType: e.target.value })
                }
                value={settings.borderType}
              >
                <Border borders={borders} />
              </select>
            </div>
          </div>
        </details>
        <details>
          <summary>
            <BackgroundSvg />
            <label>Background</label>
            <ChevronDown />
          </summary>
          <select
            className="form-control"
            onChange={(e) =>
              setSettings({ ...settings, pattern: e.target.value })
            }
            value={settings.pattern}
          >
            <Border borders={patterns} />
          </select>
        </details>
        <details>
          <summary>
            <DevIcon />
            <label>Dev Icon</label>
            <ChevronDown />
          </summary>
          <Select
            value={settings.icon}
            onChange={(selectedOption) =>
              setSettings({ ...settings, icon: selectedOption })
            }
            options={settings.devIconOptions}
          />
        </details>
        <div className="d-flex flex-grow ml-2">
          <label>Download As</label>
          <select
            value={settings.download}
            className="form-control input-md ml-2"
            onChange={(e) =>
              setSettings({ ...settings, download: e.target.value })
            }
          >
            <option>PNG</option>
            <option>JPEG</option>
          </select>
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="d-flex flex-column">
        <RandomTheme onThemeChange={getRandomImage} />
      </div>

      <div className="back-cover">
        <ComponentToImg options={{ downloadAs: settings.download }}>
          <ImageCover values={settings} />
        </ComponentToImg>
      </div>
    </div>
  );
}
